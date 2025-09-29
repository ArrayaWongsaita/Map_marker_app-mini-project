// src/shared/schema/maker.schema.js

import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const makerSchema = z.object({
  id: z
    .string()
    .uuid()
    .openapi({ example: '123e4567-e89b-12d3-a456-426614174000' }),
  name: z.string().min(1).max(100).openapi({ example: 'Marker Name' }),
  description: z.string().max(500).optional().openapi({ example: 'A marker' }),
  latitude: z.number().min(-90).max(90).openapi({ example: 13.7563 }),
  longitude: z.number().min(-180).max(180).openapi({ example: 100.5018 }),
  createdAt: z.string().openapi({ example: new Date().toISOString() }),
  updatedAt: z.string().openapi({ example: new Date().toISOString() }),
});
