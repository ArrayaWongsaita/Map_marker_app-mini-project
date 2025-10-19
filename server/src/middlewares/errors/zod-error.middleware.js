// server/src/middlewares/errors/zod-error.middleware.js

import z, { ZodError } from 'zod';
import createHttpError from 'http-errors';

export const zodErrorMiddleware = (err, req, res, next) => {
  if (err instanceof ZodError) {
    const badRequest = new createHttpError.BadRequest('Validation Error');
    badRequest.details = z.flattenError(err).fieldErrors;
    return next(badRequest);
  }

  next(err); // Pass to the next error handler
};
