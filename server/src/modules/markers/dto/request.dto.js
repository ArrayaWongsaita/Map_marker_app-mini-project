// src/modules/markers/dto/request.dto.js

import { querySchema } from '../../../shared/schema/query.schema.js';
import { makerSchema } from '../../../shared/schema/maker.schema.js';

// get all markers
export const getAllMarkersSchema = querySchema.pick({
  search: true,
});

// create marker
export const createMarkerSchema = makerSchema.pick({
  title: true,
  description: true,
  lat: true,
  lng: true,
});

// update marker
export const updateMarkerSchema = createMarkerSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

// param schema
export const paramSchema = makerSchema.pick({
  id: true,
});
