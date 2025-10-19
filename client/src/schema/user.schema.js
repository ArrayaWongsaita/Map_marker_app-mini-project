import z from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email('อีเมลไม่ถูกต้อง'),
  name: z.string().optional().nullable(),
  password: z.string().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const registerSchema = userSchema
  .pick({
    email: true,
    password: true,
  })
  .extend({
    confirmPassword: z.string().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'รหัสผ่านไม่ตรงกัน',
    path: ['confirmPassword'],
  });

export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});
