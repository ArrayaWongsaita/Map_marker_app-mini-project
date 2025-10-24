// client/src/schemas/marker.schema.js
import z from 'zod';

const markerSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().max(199).optional(),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
});

export const createMarkerSchema = markerSchema;

export const updateMarkerSchema = createMarkerSchema.partial();
