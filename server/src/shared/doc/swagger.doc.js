import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { healthRegistry } from '../../modules/health/doc/health.doc.js';
import { authRegistry } from '../../modules/auth/doc/auth.doc.js';

const registries = [healthRegistry, authRegistry];
const definitions = registries.map((r) => r.definitions).flat();

const generator = new OpenApiGeneratorV3(definitions);

export const swaggerDoc = generator.generateDocument({
  openapi: '3.0.0',
  info: {
    title: 'Map Marker API',
    version: '1.0.0',
    description:
      'API for managing map markers with user authentication and health monitoring',
  },
});
