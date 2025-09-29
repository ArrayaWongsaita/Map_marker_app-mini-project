// src/shared/middlewares/zod-error.middleware.js

import { ZodError } from 'zod';
import { BadRequest } from '../utils/error.util.js';

export const zodErrorHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    const details = err.flatten().fieldErrors;
    const error = BadRequest('Validation Error', details);
    return next(error);
  }

  next(err); // ส่งต่อไป middleware ถัดไป
};
