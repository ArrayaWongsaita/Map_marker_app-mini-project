// server/src/services/auth.service.js

import { prisma } from '../configs/prisma.config.js';
import { compareHash, hashString } from '../libs/hash.lib.js';
import { signToken } from '../libs/jwt.lib.js';
import createHttpError from 'http-errors';

export const authService = {
  // get user profile
  async getUserProfile(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw new createHttpError.NotFound('User not found');

    delete user.password;
    return { user };
  },

  // login user
  async login(data) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user) throw new createHttpError.Unauthorized('Invalid credentials');

    const isPasswordValid = await compareHash(data.password, user.password);
    if (!isPasswordValid)
      throw new createHttpError.Unauthorized('Invalid credentials');

    const token = signToken({ userId: user.id });

    delete user.password;
    return { token, user };
  },

  // register a new user
  async register(userData) {
    // Hash the password before saving to the database
    userData.password = await hashString(userData.password);

    // Save the user to the database
    const user = await prisma.user.create({
      data: userData,
    });
    delete user.password;
    return { user };
  },
};
