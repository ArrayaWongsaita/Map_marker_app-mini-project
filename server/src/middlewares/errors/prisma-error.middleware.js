import { Prisma } from '../../../generated/prisma/client.js';
import createHttpError from 'http-errors';
export const prismaErrorMiddleware = (err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2002': {
        const target = err.meta?.target;
        const detail = Array.isArray(target)
          ? target.join(', ')
          : target.split('_').join(' '); // user_email_key = user email key
        // Duplicate value for user email key
        const error = createHttpError.Conflict(`Duplicate value for ${detail}`);
        return next(error);
      }

      default:
        const error = createHttpError.InternalServerError('db error');
        return next(error);
    }
  }
  return next(err);
};
