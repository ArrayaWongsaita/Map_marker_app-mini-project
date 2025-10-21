// server/src/services/auth.service.js

import { prisma } from '../configs/prisma.config.js';
import { compareHash, hashString } from '../libs/hash.lib.js';
import createHttpError from 'http-errors';
import { signToken } from '../libs/jwt.lib.js';
export const authService = {
  async getUserProfile(userId) {
    // find user
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw new createHttpError.NotFound('User not found');

    delete user.password;
    return { user };
  },

  async login(data) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    // check user
    if (!user) throw new createHttpError.Unauthorized('Invalid credentials');

    const isPasswordValid = await compareHash(data.password, user.password);
    if (!isPasswordValid)
      throw new createHttpError.Unauthorized('Invalid credentials');

    const token = signToken({ userId: user.id });

    delete user.password;
    return { token, user };
  },

  async register(userData) {
    // hash the password
    userData.password = await hashString(userData.password);

    // save to db
    const user = await prisma.user.create({
      data: userData,
    });

    delete user.password;
    return { user };
  },
};
