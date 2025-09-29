// src/app.js

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// doc
import swaggerUi from 'swagger-ui-express';
import { swaggerDoc } from './shared/doc/swagger.doc.js';
import { notFoundMiddleware } from './shared/middlewares/notfound.middleware.js';
import { healthRoutes } from './modules/health/health.route.js';
import { authRoutes } from './modules/auth/auth.route.js';
import { defaultErrorHandler } from './shared/middlewares/default-error.middleware.js';
import { zodErrorHandler } from './shared/middlewares/zod-error.middleware.js';

// create express app
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/health', healthRoutes);
app.use('/auth', authRoutes);

// document
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// not found middleware
app.use(notFoundMiddleware);

// error handler middleware
app.use(zodErrorHandler);
app.use(defaultErrorHandler);

export default app;
