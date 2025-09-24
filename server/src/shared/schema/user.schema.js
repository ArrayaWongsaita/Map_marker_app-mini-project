import { z } from 'zod';
// import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

// extendZodWithOpenApi(z);

// export const userSchema = z.object({
//   id: z
//     .string()
//     .uuid()
//     .openapi({ example: '123e4567-e89b-12d3-a456-426614174000' }),
//   username: z.string().min(3).max(30).openapi({ example: 'john_doe' }),
//   email: z.string().email().openapi({ example: 'user1@mail.com' }),
//   password: z.string().min(6).openapi({ example: '123456' }),
//   createdAt: z.string().openapi({ example: '2023-01-01T00:00:00Z' }),
//   updatedAt: z.string().openapi({ example: '2023-01-01T00:00:00Z' }),
// });

export const userSchema = z.object({
  id: z.string().uuid(),
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(6),
  createdAt: z.string(),
  updatedAt: z.string(),
});
