// src/modules/health/health.controller.js

import { healthService } from './health.service.js';

export const healthController = {
  async getHealth(req, res, next) {
    const data = await healthService.checkHealth();
    return res.json({
      status: 'success',
      data,
    });
  },
};
