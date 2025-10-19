// server/src/services/health.service.js

import { prisma } from '../configs/prisma.config.js';
import createHttpError from 'http-errors';

export const healthService = {
  async checkHealth() {
    // Check database connection
    try {
      await prisma.$queryRaw`SELECT 1`;
    } catch {
      throw new createHttpError.ServiceUnavailable();
    }

    const healthData = {
      // เวลาที่โปรเซส Node.js ตัวนี้รันอยู่ (วัดเป็น วินาที)
      uptime: process.uptime(),
      database: 'connected',
      version: '1.0.0',
    };

    return healthData;
  },
};
