import z from 'zod';

export const markerSchema = z.object({
  id: z.uuid({ message: 'รูปแบบ ID ของมาร์กเกอร์ไม่ถูกต้อง' }),
  title: z
    .string({ required_error: 'กรุณาระบุชื่อ' })
    .min(1, { message: 'ชื่อไม่สามารถเว้นว่างได้' })
    .max(100, { message: 'ชื่อต้องมีความยาวน้อยกว่า 100 ตัวอักษร' }),
  description: z
    .string()
    .max(100, { message: 'คำอธิบายต้องมีความยาวน้อยกว่า 100 ตัวอักษร' })
    .optional()
    .nullable(),
  lat: z
    .number({ required_error: 'กรุณาระบุละติจูด' })
    .min(-90, { message: 'ละติจูดต้องอยู่ระหว่าง -90 ถึง 90' })
    .max(90, { message: 'ละติจูดต้องอยู่ระหว่าง -90 ถึง 90' }),
  lng: z
    .number({ required_error: 'กรุณาระบุลองจิจูด' })
    .min(-180, { message: 'ลองจิจูดต้องอยู่ระหว่าง -180 ถึง 180' })
    .max(180, { message: 'ลองจิจูดต้องอยู่ระหว่าง -180 ถึง 180' }),
  userId: z.string().uuid({ message: 'รูปแบบ ID ของผู้ใช้ไม่ถูกต้อง' }),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});
