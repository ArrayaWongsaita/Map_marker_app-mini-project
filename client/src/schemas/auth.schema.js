// client/src/schemas/auth.schema.js
import z from 'zod';

const userSchema = z.object({
  id: z.uuid(),
  name: z.string().optional(),
  email: z.string().email({ message: 'อีเมลไม่ถูกต้อง' }),
  password: z
    .string()
    .min(6, { message: 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร' })
    .max(100, { message: 'รหัสผ่านต้องไม่เกิน 100 ตัวอักษร' }),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});

export const registerSchema = userSchema
  .pick({
    email: true,
    name: true,
    password: true,
  })
  .and(
    z.object({
      confirmPassword: z.string().min(1, { message: 'โปรดยืนยันรหัสผ่าน' }),
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'รหัสผ่านไม่ตรงกัน',
    path: ['confirmPassword'],
  })
  .transform((data) => {
    delete data.confirmPassword;
    if (data.name === '') {
      delete data.name;
    }
    return data;
  });
