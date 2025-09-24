import { Router } from 'express';
import { healthController } from './health.controller.js';

const healthRoutes = Router();

// GET /health - Health check endpoint
healthRoutes.get('/', healthController.getHealth);

export { healthRoutes };
