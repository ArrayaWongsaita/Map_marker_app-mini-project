import { userSchema } from '../schemas/user.schema.js';

export const loginRequestDto = userSchema.pick({
  email: true,
  password: true,
});

export const registerRequestDto = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
