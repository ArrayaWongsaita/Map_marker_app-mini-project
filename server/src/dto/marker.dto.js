// server/src/dto/marker.dto.js
import { querySchema } from '../schemas/query.schema.js';

import { markerSchema } from '../schemas/marker.schema.js';
export const createMarkerSchema = markerSchema.omit({
  createdAt: true,
  updatedAt: true,
  userId: true,
  id: true,
});

export const getAllMarkerSchema = querySchema.pick({
  search: true,
});

export const markerIdSchema = markerSchema.pick({ id: true });

export const updateMarkerSchema = createMarkerSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
    path: ['_root'],
  });
