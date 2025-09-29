// src/modules/auth/dto/request.dto.js

import { userSchema } from '../../../shared/schema/user.schema.js';

export const signupRequestSchema = userSchema.pick({
  email: true,
  password: true,
  name: true,
});

export const signinRequestSchema = userSchema.pick({
  email: true,
  password: true,
});
