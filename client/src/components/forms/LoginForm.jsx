// client/src/components/forms/LoginForm.jsx

import FormFieldInput from '../form-field/FormFieldInput';
import FormFieldButton from '../form-field/FormFieldButton';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas/auth.schema';

const initialState = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues: initialState,
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-1 min-w-80"
    >
      <FormFieldInput
        required
        label="Email Address"
        autoComplete="email"
        errors={errors?.email?.message}
        {...register('email')}
      />

      <FormFieldInput
        required
        label="Password"
        type="password"
        errors={errors?.password?.message}
        autoComplete="current-password"
        {...register('password')}
      />
      <FormFieldButton disabled={!isDirty} loading={isSubmitting}>
        Login
      </FormFieldButton>
    </form>
  );
}
