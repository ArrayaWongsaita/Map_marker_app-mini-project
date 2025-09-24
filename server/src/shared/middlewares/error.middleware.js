import { ZodError } from 'zod';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '../../../generated/prisma/runtime/library.js';
import { error } from '../utils/response.util.js';

export const errorMiddleware = (err, req, res, next) => {
  // // check error from zod
  // if (err instanceof ZodError) {
  //   const details = err.flatten().fieldErrors;
  //   return error(res, 'Invalid request', 400, details, req.originalUrl);
  // }

  // // check error form prisma
  // if (err instanceof PrismaClientKnownRequestError) {
  //   console.log('Prisma Error :', err.message);
  //   return error(res, 'Database error', 500, null, req.originalUrl);
  // }
  // // validation error from prisma
  // if (err instanceof PrismaClientValidationError) {
  //   console.log('Prisma Validation Error :', err.message);
  //   return error(res, 'Database validation error', 500, null, req.originalUrl);
  // }

  // default to 500 server error
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const details = err.details || null;
  console.log('Error:', err.message);
  console.log('Detail', details);
  return error({
    res,
    message,
    statusCode,
    details,
    path: req.originalUrl,
  });
};
