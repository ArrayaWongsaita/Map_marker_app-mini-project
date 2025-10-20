// client/src/services/marker.service.js
import { publicAxiosInstance } from './api/axios.instance';

export const markerService = {
  createMarker: async (markerData) => {
    const response = await publicAxiosInstance.post('/markers', markerData);
    return response.data;
  },
  updateMarker: async (id, markerData) => {
    const response = await publicAxiosInstance.patch(
      `/markers/${id}`,
      markerData
    );
    return response.data;
  },
  deleteMarker: async (id) => {
    const response = await publicAxiosInstance.delete(`/markers/${id}`);
    return response.data;
  },
  getMarkerById: async (id) => {
    const response = await publicAxiosInstance.get(`/markers/${id}`);
    return response.data;
  },
  getAllMarkers: async () => {
    const response = await publicAxiosInstance.get('/markers');
    return response.data;
  },
};
