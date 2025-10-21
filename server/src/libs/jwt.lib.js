import jwt from 'jsonwebtoken';
import { env } from '../configs/env.config.js';

export function signToken(payload, options = {}) {
  return jwt.sign(payload, env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: env.JWT_EXPIRES_IN,
    ...options,
  });
}

export function verifyToken(token) {
  return jwt.verify(token, env.JWT_SECRET);
}
