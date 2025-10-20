// client/src/components/forms/RegisterForm.jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas/auth.schema';
import FormFieldButton from '../form-field/FormFieldButton';
import FormFieldInput from '../form-field/FormFieldInput';
import { authService } from '@/services/auth.service';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/constants/router.constant';
import { AxiosError } from 'axios';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: '',
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await authService.register(data);
      toast.success('Registration successful');
      navigate(ROUTES.LOGIN);
    } catch (error) {
      if (error instanceof AxiosError && error.response.status === 409) {
        const emailError = 'Email is already in use';
        toast.error(emailError);
        return setError('email', {
          message: emailError,
        });
      }
      toast.error('Registration failed');
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-1 min-w-80"
    >
      <FormFieldInput
        required={false}
        label="Name"
        autoComplete="name"
        errors={errors?.name?.message}
        {...register('name')}
      />
      <FormFieldInput
        label="Email Address"
        autoComplete="email"
        errors={errors?.email?.message}
        {...register('email')}
      />
      <FormFieldInput
        label="Password"
        autoComplete="password"
        type="password"
        errors={errors?.password?.message}
        {...register('password')}
      />
      <FormFieldInput
        label="Confirm Password"
        type="password"
        autoComplete="confirmPassword"
        errors={errors?.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <FormFieldButton disabled={!isDirty} loading={isSubmitting}>
        Register
      </FormFieldButton>
    </form>
  );
}
