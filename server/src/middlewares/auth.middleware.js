import createHttpError from 'http-errors';
import { verifyToken } from '../libs/jwt.lib.js';
export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization; // "Bearer token"
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new createHttpError.Unauthorized(
      'Authorization header missing or malformed'
    );
  }
  // "[Bearer ,token]"
  const token = authHeader.split(' ')[1];

  const decoded = verifyToken(token);
  req.user = decoded;

  next();
};
