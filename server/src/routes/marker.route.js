// server/src/routes/marker.route.js

import { Router } from 'express';
import { validateQuery } from '../middlewares/validate.middleware.js';
import { getAllMarkerSchema } from '../dto/marker.dto.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { markerController } from '../controllers/marker.controller.js';

const markerRouter = Router();

markerRouter.get(
  '/',
  validateQuery(getAllMarkerSchema),
  authMiddleware,
  markerController.getAllMarkers
);

export { markerRouter };
