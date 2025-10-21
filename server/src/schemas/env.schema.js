// server/src/schemas/env.schema.js
import z from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().min(1), // for prisma
  PORT: z.coerce.number().default(3000), // server port
  JWT_SECRET: z.string().min(1).default('your-secret-key'), // for JWT
  JWT_EXPIRES_IN: z.string().default('24h'), // for JWT
  SALT_ROUNDS: z.coerce.number().default(12), // for bcrypt
});
