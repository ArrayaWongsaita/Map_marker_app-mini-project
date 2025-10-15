// server/src/services/auth.service.js

import { prisma } from '../configs/prisma.config.js';
import { compareHash, hashString } from '../libs/hash.lib.js';
import { signToken } from '../libs/jwt.lib.js';
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from '../utils/error.util.js';

export const authService = {
  async getUserProfile(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw NotFoundError('User not found');

    delete user.password;
    return { user };
  },

  async login(data) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user) throw UnauthorizedError('Invalid credentials');

    const isPasswordValid = await compareHash(data.password, user.password);
    if (!isPasswordValid) throw UnauthorizedError('Invalid credentials');

    const token = signToken({ userId: user.id });

    delete user.password;
    return { token, user };
  },

  async register(userData) {
    // Hash the password before saving to the database
    userData.password = await hashString(userData.password);

    // Save the user to the database
    try {
      await prisma.user.create({
        data: userData,
      });
      return { message: 'User registered successfully' };
    } catch (error) {
      if (error.code === 'P2002' && error.meta.target.includes('email')) {
        throw ConflictError('Email already in use');
      }
      throw error;
    }
  },
};
