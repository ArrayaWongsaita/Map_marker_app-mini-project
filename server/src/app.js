// server/src/app.js

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { swaggerDoc } from './configs/swagger.config.js';
import { notFoundMiddleware } from './middlewares/notfound.middleware.js';
import { zodErrorMiddleware } from './middlewares/zod-error.middleware.js';
import { defaultErrorMiddleware } from './middlewares/default-error.middleware.js';
import { healthRoutes } from './routes/health.route.js';
import { authRouter } from './routes/auth.route.js';
import { markerRouter } from './routes/marker.route.js';

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/health', healthRoutes);
app.use('/auth', authRouter);
app.use('/markers', markerRouter);

// Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// not found middleware
app.use(notFoundMiddleware);

// Error handling middleware
app.use(zodErrorMiddleware);
app.use(defaultErrorMiddleware);

export default app;
