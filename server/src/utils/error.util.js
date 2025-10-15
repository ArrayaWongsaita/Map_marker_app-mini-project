// server/src/utils/error.util.js

// Generic AppError
const AppError = (message, statusCode = 500, details = null) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  if (details) {
    error.details = details;
  }
  return error;
};

// 404 Not Found
export const NotFoundError = (msg = 'Not found') => AppError(msg, 404);

// 401 Unauthorized
export const UnauthorizedError = (msg = 'Unauthorized') => AppError(msg, 401);

// 400 Bad Request
export const BadRequest = (msg = 'Bad request', details = null) =>
  AppError(msg, 400, details);

// 409 Conflict
export const ConflictError = (msg = 'Conflict', details = null) =>
  AppError(msg, 409, details);

// 503 Service Unavailable
export const ServiceUnavailableError = (
  msg = 'Service unavailable',
  details = null
) => AppError(msg, 503, details);

// 500 Internal Server Error
export const InternalServerError = (
  msg = 'Internal server error',
  details = null
) => AppError(msg, 500, details);
