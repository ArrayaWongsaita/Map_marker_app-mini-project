// server/src/controllers/marker.controller.js
import { markerService } from '../services/marker.service.js';

export const markerController = {
  // delete a marker
  async deleteMarker(req, res) {
    await markerService.deleteMarker(req.user.userId, req.params.id);
    return res.status(204).end();
  },
  // Update a marker
  async updateMarker(req, res) {
    const data = await markerService.updateMarker(
      req.user.userId,
      req.params.id,
      req.body
    );
    return res.status(200).json({
      status: 'success',
      ...data,
    });
  },
  // Create a new marker
  async createMarker(req, res) {
    const data = await markerService.createMarker(req.user.userId, req.body);
    return res.status(201).json({
      status: 'success',
      ...data,
    });
  },
  // Get all markers
  async getAllMarkers(req, res) {
    const data = await markerService.getAllMarkers(req.user.userId, req.query);
    return res.status(200).json({
      status: 'success',
      ...data,
    });
  },
};
