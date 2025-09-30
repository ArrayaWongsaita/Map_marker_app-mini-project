// src/modules/markers/doc/marker.doc.js

import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import {
  createMarkerSchema,
  getAllMarkersSchema,
  paramSchema,
  updateMarkerSchema,
} from '../dto/request.dto.js';

export const markerRegistry = new OpenAPIRegistry();

// delete markers
markerRegistry.registerPath({
  method: 'delete',
  path: '/markers/{id}',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    params: paramSchema,
  },
  responses: {},
});

// update markers
markerRegistry.registerPath({
  method: 'patch',
  path: '/markers/{id}',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    params: paramSchema,
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

markerRegistry.register('Update Marker Request', updateMarkerSchema);
markerRegistry.register('Update Marker Params', paramSchema);

// Create markers
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

markerRegistry.register('Create Marker Request', createMarkerSchema);

// get all markers
markerRegistry.registerPath({
  method: 'get',
  path: '/markers',
  tags: ['Markers'],
  security: [{ BearerAuth: [] }],
  request: {
    query: getAllMarkersSchema,
  },
  responses: {},
});

markerRegistry.register('Get All Markers Query', getAllMarkersSchema);
