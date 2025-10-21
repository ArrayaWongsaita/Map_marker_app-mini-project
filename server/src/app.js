// src/app.js

import express from 'express';

// import
import swaggerUi from 'swagger-ui-express';
import { swaggerDoc } from './configs/swagger.config.js';
import cors from 'cors';
import morgan from 'morgan';
import { notFoundMiddleware } from './middlewares/notfound.middleware.js';
import { defaultErrorMiddleware } from './middlewares/errors/default-error.middleware.js';
import { healthRoutes } from './routes/health.route.js';
import { jwtErrorMiddleware } from './middlewares/errors/jwt-error.middleware.js';
import { authRouter } from './routes/auth.route.js';
import { zodErrorMiddleware } from './middlewares/errors/zod-error.middleware.js';
import { prismaErrorMiddleware } from './middlewares/errors/prisma-error.middleware.js';
import { markerRouter } from './routes/marker.route.js';

const app = express();

// middleware
app.use(cors());
app.use(morgan('dev')); // logger
app.use(express.json());

// routes
app.use('/health', healthRoutes);
app.use('/auth', authRouter);
app.use('/markers', markerRouter);

// Document
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// not found
app.use(notFoundMiddleware);

// error handling middleware
app.use(prismaErrorMiddleware);
app.use(zodErrorMiddleware);
app.use(jwtErrorMiddleware);

// default error
app.use(defaultErrorMiddleware);

export default app;
