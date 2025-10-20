// client/src/services/marker.service.js

import { publicAxiosInstance } from './api/axios.instance';

export const markerService = {
  getMarkerById: async (id) => {
    const response = await publicAxiosInstance.get(`/markers/${id}`);
    return response.data;
  },
  getAllMarkers: async () => {
    const response = await publicAxiosInstance.get('/markers');
    return response.data;
  },
};
