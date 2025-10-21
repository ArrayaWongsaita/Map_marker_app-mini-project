// server/src/schemas/marker.schema.js

import { z } from 'zod';
import { userSchema } from './user.schema.js';

import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const markerSchema = z.object({
  id: z
    .string()
    .uuid()
    .openapi({ example: '123e4567-e89b-12d3-a456-426614174000' }),
  title: z.string().min(1).max(100).openapi({ example: 'Marker Name' }),
  description: z.string().max(500).optional().openapi({ example: 'A marker' }),
  lat: z.number().min(-90).max(90).openapi({ example: 13.7563 }),
  lng: z.number().min(-180).max(180).openapi({ example: 100.5018 }),
  userId: userSchema.shape.id,
  createdAt: z.date().openapi({ example: '2025-10-15T00:00:00.000Z' }),
  updatedAt: z.date().openapi({ example: '2025-10-15T00:00:00.000Z' }),
});
