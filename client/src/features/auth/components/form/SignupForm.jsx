import FormFieldInput from '@/shared/components/form-field/FormFieldInput';
import { Button } from '@/shared/components/ui/button';
import { Form } from '@/shared/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// 1 create form schema
const signupSchema = z
  .object({
    name: z.string().trim().optional(),
    email: z.email(),
    password: z
      .string()
      .min(6, { message: 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'รหัสผ่านไม่ตรงกัน',
    path: ['confirmPassword'],
  })
  .transform((data) => {
    delete data.confirmPassword;
    if (!data.name.trim()) delete data.name;
    return data;
  });
export default function SignupForm() {
  // 2 Define Signup  form
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { isSubmitting } = form.formState;

  // 3 Define a submit handler
  async function onSubmit(values) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('values', values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormFieldInput form={form} name="name" label="Username" />
        <FormFieldInput form={form} name="email" label="Email" />
        <FormFieldInput
          form={form}
          type="password"
          name="password"
          label="Password"
        />
        <FormFieldInput
          form={form}
          type="password"
          name="confirmPassword"
          label="Confirm Password"
        />
        <Button disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
}
