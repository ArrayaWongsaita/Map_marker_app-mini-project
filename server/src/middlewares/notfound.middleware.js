// server/src/middlewares/notfound.middleware.js

import createHttpError from 'http-errors';

export const notFoundMiddleware = (req, res, next) => {
  throw new createHttpError.NotFound('Route not found');
};
