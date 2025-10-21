// server/src/dto/marker.dto.js
import { querySchema } from '../schemas/query.schema.js';

export const getAllMarkerSchema = querySchema.pick({
  search: true,
});
