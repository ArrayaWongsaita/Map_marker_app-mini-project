import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import {
  createMarkerSchema,
  getAllMarkerSchema,
  markerIdSchema,
  updateMarkerSchema,
} from '../dto/marker.dto.js';

export const markerRegistry = new OpenAPIRegistry();

// get marker by id

markerRegistry.registerPath({
  method: 'get',
  path: '/markers/{id}',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    params: markerIdSchema,
  },
  responses: {
    200: {},
  },
});

// delete marker

markerRegistry.registerPath({
  method: 'delete',
  path: '/markers/{id}',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    params: markerIdSchema,
  },
  responses: {
    204: {},
  },
});

// update marker

markerRegistry.registerPath({
  method: 'patch',
  path: '/markers/{id}',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    params: markerIdSchema,
    body: {
      content: {
        'application/json': {
          schema: updateMarkerSchema,
        },
      },
    },
  },
  responses: {
    200: {},
  },
});

markerRegistry.register('UpdateMarkersRequest', updateMarkerSchema);
markerRegistry.register('MarkerIdParam', markerIdSchema);

// create marker

markerRegistry.registerPath({
  method: 'post',
  path: '/markers',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    body: {
      content: {
        'application/json': {
          schema: createMarkerSchema,
        },
      },
    },
  },
  responses: {
    200: {},
  },
});

markerRegistry.register('CreateMarkersRequest', createMarkerSchema);

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
