import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
export const jwtErrorMiddleware = (err, req, res, next) => {
  if (err instanceof jwt.TokenExpiredError) {
    return next(
      createHttpError.Unauthorized('Token expired Please Login again')
    );
  }

  if (err instanceof jwt.JsonWebTokenError) {
    return next(createHttpError.Unauthorized('Token is invalid'));
  }

  next(err);
};
