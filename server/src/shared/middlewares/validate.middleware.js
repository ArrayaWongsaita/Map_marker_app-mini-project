// src/shared/middlewares/validate.middleware.js
export const validateBody = (schema) => (req, res, next) => {
  req.body = schema.parse(req.body);
  next();
};

export const validateQuery = (schema) => (req, res, next) => {
  req.query = schema.parse(req.query);
  next();
};

export const validateParams = (schema) => (req, res, next) => {
  req.params = schema.parse(req.params);
  next();
};
