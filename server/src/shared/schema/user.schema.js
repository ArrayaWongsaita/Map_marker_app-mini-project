// src/shared/schema/user.schema.js
import { z } from 'zod';

import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const userSchema = z.object({
  id: z
    .string()
    .uuid()
    .openapi({ example: '123e4567-e89b-12d3-a456-426614174000' }),
  name: z.string().min(3).max(30).optional().openapi({ example: 'John Doe' }),
  email: z.string().email().openapi({ example: 'user1@mail.com' }),
  password: z.string().min(6).openapi({ example: '123456' }),
  createdAt: z.string().openapi({ example: '2023-01-01T00:00:00Z' }),
  updatedAt: z.string().openapi({ example: '2023-01-01T00:00:00Z' }),
});
