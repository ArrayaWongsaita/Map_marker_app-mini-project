import { healthService } from './health.service.js';
import { success } from '../../shared/utils/response.util.js';

export const healthController = {
  async getHealth(req, res, next) {
    const data = await healthService.checkHealth();
    return success({ res, data });
  },
};
