// server/src/routes/auth.route.js

import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { validateBody } from '../middlewares/validate.middleware.js';
import { loginRequestDto, registerRequestDto } from '../dto/auth.dto.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const authRouter = Router();

authRouter.get('/profile', authMiddleware, authController.getProfile);

authRouter.post('/login', validateBody(loginRequestDto), authController.login);

authRouter.post(
  '/register',
  validateBody(registerRequestDto),
  authController.register
);

export { authRouter };
