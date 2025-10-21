import bcrypt from 'bcrypt';
import { env } from '../configs/env.config.js';

export async function hashString(str) {
  return await bcrypt.hash(str, env.SALT_ROUNDS);
}

export async function compareHash(str, hash) {
  return await bcrypt.compare(str, hash);
}
