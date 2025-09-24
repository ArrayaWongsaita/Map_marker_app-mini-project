import { prisma } from '../../shared/config/prisma.config.js';
import { ServiceUnavailableError } from '../../shared/utils/error.util.js';

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
