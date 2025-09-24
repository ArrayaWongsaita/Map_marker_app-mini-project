// src/app.js

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// doc
import swaggerUi from 'swagger-ui-express';
import { swaggerDoc } from './shared/doc/swagger.doc.js';
import { notFoundMiddleware } from './shared/middlewares/notfound.middleware.js';
import { errorMiddleware } from './shared/middlewares/error.middleware.js';
import { healthRoutes } from './modules/health/health.route.js';

// create express app
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/health', healthRoutes);

// document
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// not found middleware
app.use(notFoundMiddleware);

// error handler middleware
app.use(errorMiddleware);

export default app;
