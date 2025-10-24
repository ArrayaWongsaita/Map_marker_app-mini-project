import z from 'zod';

export const EnvSchema = z.object({
  VITE_NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  VITE_API_URL: z.url().default('http://localhost:3000'),
});
