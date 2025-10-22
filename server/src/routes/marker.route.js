// server/src/routes/marker.route.js

import { Router } from 'express';
import {
  validateBody,
  validateParams,
  validateQuery,
} from '../middlewares/validate.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { markerController } from '../controllers/marker.controller.js';
import {
  createMarkerSchema,
  getAllMarkerSchema,
  markerIdSchema,
  updateMarkerSchema,
} from '../dto/marker.dto.js';

const markerRouter = Router();

markerRouter.patch(
  '/:id',
  validateParams(markerIdSchema),
  validateBody(updateMarkerSchema),
  authMiddleware,
  markerController.updateMarker
);

markerRouter.post(
  '/',
  validateBody(createMarkerSchema),
  authMiddleware,
  markerController.createMarker
);

markerRouter.get(
  '/',
  validateQuery(getAllMarkerSchema),
  authMiddleware,
  markerController.getAllMarkers
);

export { markerRouter };
