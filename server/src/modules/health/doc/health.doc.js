import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

export const healthRegistry = new OpenAPIRegistry();

healthRegistry.registerPath({
  method: 'get',
  path: '/health',
  tags: ['Health'],
  responses: {
    200: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: { type: 'string', example: 'success' },
              timestamp: { type: 'string', example: new Date().toISOString() },
              data: { type: 'object', example: { key: 'value' } },
            },
            required: ['status', 'timestamp', 'data'],
          },
        },
      },
    },
  },
});
