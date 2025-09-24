// src/shared/middlewares/notfound.middleware.js
import { NotFoundError } from '../utils/error.util.js';

export const notFoundMiddleware = () => {
  throw NotFoundError('Path not found');
};
