// server/src/services/health.service.js

import { prisma } from '../configs/prisma.config.js';
import { ServiceUnavailableError } from '../utils/error.util.js';

export const healthService = {
  async checkHealth() {
    // Check database connection
    try {
      await prisma.$queryRaw`SELECT 1`;
    } catch {
      throw ServiceUnavailableError();
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
