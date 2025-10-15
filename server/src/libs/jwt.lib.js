// server/src/libs/jwt.lib.js

import jwt from 'jsonwebtoken';
import { env } from '../configs/env.config.js';
import { UnauthorizedError } from '../utils/error.util.js';

export function signToken(payload, options = {}) {
  return jwt.sign(payload, env.JWT_SECRET, {
    ...options,
  });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, env.JWT_SECRET);
  } catch {
    throw UnauthorizedError();
  }
}
