// src/shared/middlewares/default-error.middleware.js

export const defaultErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const details = err.details || null;

  console.log('Error:', err.message);
  console.log('Details:', details);

  return res.status(statusCode).json({
    message,
    statusCode,
    details,
    path: req.originalUrl,
  });
};
