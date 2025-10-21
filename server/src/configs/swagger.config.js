// server/src/configs/swagger.config.js

import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { healthRegistry } from '../documents/health.doc.js';
import { authRegistry } from '../documents/auth.doc.js';
import { markerRegistry } from '../documents/marker.doc.js';

const registries = [healthRegistry, authRegistry, markerRegistry];
const definitions = registries.flatMap((registry) => registry.definitions);

const generator = new OpenApiGeneratorV3(definitions);

export const swaggerDoc = generator.generateDocument({
  openapi: '3.0.0',
  info: {
    title: 'Map Marker API',
    version: '1.0.0',
    description: 'API documentation for the Map Marker',
  },
});

// add Authorize button

swaggerDoc.components = {
  ...swaggerDoc.components,
  securitySchemes: {
    BearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
};
