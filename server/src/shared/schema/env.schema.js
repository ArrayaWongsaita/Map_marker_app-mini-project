import z from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  PORT: z.coerce.number().default(3000),
  JWT_SECRET: z.string().min(1).default('your-secret-key'),
  JWT_EXPIRES_IN: z.string().default('24h'),
  SALT_ROUNDS: z.coerce.number().default(12),
});
