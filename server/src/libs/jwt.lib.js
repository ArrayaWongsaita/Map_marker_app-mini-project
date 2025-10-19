// server/src/libs/jwt.lib.js

import jwt from 'jsonwebtoken';
import { env } from '../configs/env.config.js';
import createHttpError from 'http-errors';

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
