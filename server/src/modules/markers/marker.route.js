// src/modules/markers/marker.route.js
import { Router } from 'express';
import {
  validateQuery,
  validateBody,
  validateParams,
} from '../../shared/middlewares/validate.middleware.js';
import { markerController } from './marker.controller.js';
import {
  getAllMarkersSchema,
  createMarkerSchema,
  paramSchema,
  updateMarkerSchema,
} from './dto/request.dto.js';
import { authMiddleware } from '../../shared/middlewares/auth.middleware.js';

const markerRouter = Router();

markerRouter.delete(
  '/:id',
  validateParams(paramSchema),
  authMiddleware,
  markerController.deleteMarker
);

markerRouter.patch(
  '/:id',
  validateParams(paramSchema),
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
  validateQuery(getAllMarkersSchema),
  authMiddleware,
  markerController.getAllMarkers
);

export { markerRouter };
