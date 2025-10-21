// server/src/configs/env.config.js

import * as dotenv from 'dotenv';
import { envSchema } from '../schemas/env.schema.js';
import z from 'zod';

dotenv.config();

const { success, error, data } = envSchema.safeParse(process.env);

if (success === false) {
  console.error('❌ Invalid environment variables \n', z.prettifyError(error));
  process.exit(1); // Exit the process with an error code
}

export const env = data;
