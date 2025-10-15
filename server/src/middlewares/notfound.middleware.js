// server/src/middlewares/notfound.middleware.js
import error from 'http-errors';
import { NotFoundError } from '../utils/error.util.js';

export const notFoundMiddleware = () => {
  throw NotFoundError('Route not found');
  //throw new error.NotFound('Route not found');
};
