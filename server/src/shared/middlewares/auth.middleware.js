// src/shared/middlewares/auth.middleware.js

import { verifyToken } from '../lib/jwt.lib.js';
import { UnauthorizedError } from '../utils/error.util.js';

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw UnauthorizedError('Authorization header missing or malformed');
  }

  const token = authHeader.split(' ')[1];

  const decoded = verifyToken(token);
  req.user = decoded;

  next();
};
