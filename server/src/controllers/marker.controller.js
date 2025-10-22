import { markerService } from '../services/marker.service.js';

export const markerController = {
  async getMarkerById(req, res) {
    const data = await markerService.getMarkerById(
      req.user.userId,
      req.params.id
    );
    res.json({
      status: 'success',
      ...data,
    });
  },

  async deleteMarker(req, res) {
    await markerService.deleteMarker(req.user.userId, req.params.id);

    res.status(204).end();
  },

  async updateMarker(req, res) {
    const data = await markerService.updateMarker(
      req.user.userId,
      req.params.id,
      req.body
    );

    res.json({
      status: 'success',
      ...data,
    });
  },

  async createMarker(req, res) {
    const data = await markerService.createMarker(req.user.userId, req.body);
    res.status(201).json({
      status: 'success',
      ...data,
    });
  },

  async getAllMarkers(req, res) {
    const data = await markerService.getAllMarkers(req.user.userId, req.query);
    res.json({
      status: 'success',
      ...data,
    });
  },
};
