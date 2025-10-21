import { markerService } from '../services/marker.service.js';

export const markerController = {
  async getAllMarkers(req, res) {
    const data = await markerService.getAllMarkers(req.user.userId, req.query);
    res.json({
      status: 'success',
      ...data,
    });
  },
};
