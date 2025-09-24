// src/shared/utils/response.util.js
export const success = ({
  res,
  data,
  message = 'Success',
  statusCode = 200,
}) => {
  return res
    .status(statusCode)
    .json({ status: 'ok', message, data, timestamp: new Date().toISOString() });
};

export const error = ({
  res,
  message = 'Something went wrong',
  statusCode = 500,
  details = null,
  path = '',
}) => {
  const payload = {
    status: 'error',
    message,
    timestamp: new Date().toISOString(),
    path,
  };
  if (details) payload.details = details;
  return res.status(statusCode).json(payload);
};
