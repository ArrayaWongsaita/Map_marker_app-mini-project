// src/shared/utils/error.util.js

// Generic AppError
const AppError = (message, statusCode = 500, details = null) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  if (details) {
    error.details = details;
  }
  return error;
};

// 400 Bad Request
export const BadRequest = (msg = 'Bad request', details = null) =>
  AppError(msg, 400, details);

// 401 Unauthorized
export const UnauthorizedError = (msg = 'Unauthorized') => AppError(msg, 401);

// 403 Forbidden
export const ForbiddenError = (msg = 'Forbidden') => AppError(msg, 403);

// 404 Not Found
export const NotFoundError = (msg = 'Not found') => AppError(msg, 404);

// 409 Conflict
export const ConflictError = (msg = 'Conflict', details = null) =>
  AppError(msg, 409, details);

// 503 Service Unavailable
export const ServiceUnavailableError = (
  msg = 'Service unavailable',
  details = null
) => AppError(msg, 503, details);
