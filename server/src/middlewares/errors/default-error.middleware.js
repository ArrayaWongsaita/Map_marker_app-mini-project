// server/src/middlewares/errors/default-error.middleware.js
export const defaultErrorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const details = err.details || null;

  console.error('Error :', err.message);

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    details,
    path: req.originalUrl,
  });
};
