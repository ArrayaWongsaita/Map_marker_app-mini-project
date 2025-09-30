// src/modules/auth/auth.route.js

import { Router } from 'express';
import { authController } from './auth.controller.js';
import { validateBody } from '../../shared/middlewares/validate.middleware.js';
import { signinRequestSchema, signupRequestSchema } from './dto/request.dto.js';
import { authMiddleware } from '../../shared/middlewares/auth.middleware.js';

const authRoutes = Router();

authRoutes.post(
  '/signup',
  validateBody(signupRequestSchema),
  authController.signup
);

authRoutes.post(
  '/signin',
  validateBody(signinRequestSchema),
  authController.signin
);

authRoutes.get('/profile', authMiddleware, authController.getProfile);

export { authRoutes };
