// server/src/middlewares/errors/prisma-error.middleware.js
import createHttpError from 'http-errors';
import { Prisma } from '../../../generated/prisma/client.js';

export const prismaErrorMiddleware = (err, req, res, next) => {
  //  ตรวจว่าเป็น Prisma Error หรือไม่
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      // 🔹 P2002 = Unique constraint failed
      case 'P2002': {
        const target = err.meta?.target;
        const detail = Array.isArray(target)
          ? target.join(', ')
          : target.split('_').join(' ');
        const error = createHttpError.Conflict(`Duplicate value for ${detail}`);

        return next(error);
      }

      default: {
        const error = createHttpError.InternalServerError('Database error');
        return next(error);
      }
    }
  }

  // ถ้าไม่ใช่ Prisma error → ส่งต่อ middleware ถัดไป
  return next(err);
};
