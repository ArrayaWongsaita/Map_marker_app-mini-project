// server/src/dto/maker.dto.js

import { markerSchema } from '../schemas/marker.schema.js';
import { querySchema } from '../schemas/query.schema.js';

export const createMarkerSchema = markerSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  userId: true,
});

export const updateMarkerSchema = createMarkerSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
    path: ['_root'],
  });

export const markerIdSchema = markerSchema.pick({ id: true });

export const getAllMarkerSchema = querySchema.pick({
  search: true,
});
