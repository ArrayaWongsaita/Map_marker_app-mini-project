// server/src/middlewares/errors/jwt-error.middleware.js
import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';

export const jwtErrorMiddleware = (err, req, res, next) => {
  // ตรวจสอบว่า error เกี่ยวกับ JWT
  if (err instanceof jwt.TokenExpiredError) {
    return next(
      createHttpError.Unauthorized('Token expired Please login again')
    );
  }

  if (err instanceof jwt.JsonWebTokenError) {
    return next(createHttpError.Unauthorized('Token is invalid'));
  }

  // ถ้าไม่ใช่ JWT error → ส่งต่อ
  next(err);
};
