// server/src/middlewares/zod-error.middleware.js

import z, { ZodError } from 'zod';
import { BadRequest } from '../utils/error.util.js';

export const zodErrorMiddleware = (err, req, res, next) => {
  if (err instanceof ZodError) {
    const details = z.flattenError(err).fieldErrors;
    err = BadRequest('Validation Error', details);
  }

  next(err); // Pass to the next error handler
};
