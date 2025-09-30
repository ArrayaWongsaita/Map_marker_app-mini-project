// server/src/shared/schema/query.schema.js

import z from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const querySchema = z.object({
  search: z.string().min(2).max(100).optional(),
});
