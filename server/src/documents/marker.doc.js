import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { getAllMarkerSchema } from '../dto/marker.dto.js';

export const markerRegistry = new OpenAPIRegistry();

// get All marker

markerRegistry.registerPath({
  method: 'get',
  path: '/markers',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    query: getAllMarkerSchema,
  },
  responses: {
    200: {},
  },
});

markerRegistry.register('GetAllMarkersQuery', getAllMarkerSchema);
