// server/src/middlewares/auth.middleware.js
import { verifyToken } from '../libs/jwt.lib.js';
import createHttpError from 'http-errors';

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new createHttpError.Unauthorized(
      'Authorization header missing or malformed'
    );
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);
  req.user = decoded;

  next();
};
