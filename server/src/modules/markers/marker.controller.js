// src/modules/markers/marker.controller.js
import { markerService } from './marker.service.js';

export const markerController = {
  deleteMarker: async (req, res, next) => {
    await markerService.deleteMarker(req.user.id, req.params.id);
    // 204 No Content
    return res.status(204).send();
  },

  updateMarker: async (req, res, next) => {
    const data = await markerService.updateMarker(
      req.user.id,
      req.params.id,
      req.body
    );
    return res.json({
      status: 'success',
      data,
    });
  },

  createMarker: async (req, res, next) => {
    const data = await markerService.createMarker(req.user.id, req.body);
    return res.status(201).json({
      status: 'success',
      data,
    });
  },

  getAllMarkers: async (req, res, next) => {
    const data = await markerService.getAllMarkers(req.user.id, req.query);
    return res.json({
      status: 'success',
      data,
    });
  },
};
