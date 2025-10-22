import z, { ZodError } from 'zod';
import creteHttpError from 'http-errors';

export const zodErrorMiddleware = (err, req, res, next) => {
  if (err instanceof ZodError) {
    const badRequest = new creteHttpError.BadRequest('Validation Error');
    //badRequest = {message: 'Validation Error' , statusCode: 400}
    badRequest.details = z.flattenError(err).fieldErrors;
    return next(badRequest);
  }
  next(err);
};
