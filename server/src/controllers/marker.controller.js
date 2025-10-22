import { markerService } from '../services/marker.service.js';

export const markerController = {
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
