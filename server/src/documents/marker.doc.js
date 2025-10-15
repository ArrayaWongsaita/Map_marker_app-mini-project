// server/src/documents/marker.doc.js

import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import {
  createMarkerSchema,
  getAllMarkerSchema,
  markerIdSchema,
  updateMarkerSchema,
} from '../dto/maker.dto.js';

export const markerRegistry = new OpenAPIRegistry();

// delete marker 204
markerRegistry.registerPath({
  method: 'delete',
  path: '/markers/{id}',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    params: markerIdSchema,
  },
  responses: {},
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
  responses: {},
});
markerRegistry.register('UpdateMarkerRequest', updateMarkerSchema);
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
  responses: {},
});
markerRegistry.register('CreateMarkerRequest', createMarkerSchema);

//get all markers
markerRegistry.registerPath({
  method: 'get',
  path: '/markers',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    query: getAllMarkerSchema,
  },
  responses: {},
});

markerRegistry.register('GetAllMarkersQuery', getAllMarkerSchema);
