// server/src/controllers/health.controller.js

import z from 'zod';
import { healthService } from '../services/health.service.js';

export const healthController = {
  async getHealth(req, res, next) {
    const data = await healthService.checkHealth();
    return res.json({
      status: 'success',
      data,
    });
  },
};
