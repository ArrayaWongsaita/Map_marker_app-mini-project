import { prisma } from '../configs/prisma.config.js';
import createHttpError from 'http-errors';

export const healthService = {
  async checkHealth() {
    try {
      await prisma.$queryRaw`SELECT 1`;
    } catch {
      throw new createHttpError.ServiceUnavailable();
    }
    const healthData = {
      uptime: process.uptime(),
      database: 'connected',
      version: '1.0.0',
    };
    return healthData;
  },
};
