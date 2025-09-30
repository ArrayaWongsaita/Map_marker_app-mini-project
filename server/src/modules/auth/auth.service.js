// src/modules/auth/auth.service.js
import { prisma } from '../../shared/config/prisma.config.js';
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from '../../shared/utils/error.util.js';
import { hashPassword, comparePassword } from '../../shared/lib/bcrypt.lib.js';
import { signToken } from '../../shared/lib/jwt.lib.js';
export const authService = {
  async signup(data) {
    const isExistingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (isExistingUser) throw ConflictError('Email already in use');

    data.password = await hashPassword(data.password);

    const newUser = await prisma.user.create({ data: data });

    delete newUser.password;
    return newUser;
  },

  async signin(data) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) throw UnauthorizedError('Invalid email or password');

    const isPasswordValid = await comparePassword(data.password, user.password);

    if (!isPasswordValid) throw UnauthorizedError('Invalid email or password');

    const token = signToken({ id: user.id });

    delete user.password;
    return { user, token };
  },

  async getUserProfile(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw NotFoundError('User not found');

    delete user.password;
    return user;
  },
};
