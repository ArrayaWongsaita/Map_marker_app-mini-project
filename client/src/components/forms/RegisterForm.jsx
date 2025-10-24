import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas/auth.schema';
import FormFieldInput from '../form-field/FormFieldInput';
import FormFieldButton from '../form-field/FormFieldButton';
import { authService } from '@/services/auth.service';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { ROUTES } from '@/constants/router.constant';
import { AxiosError } from 'axios';

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await authService.register(data);
      toast.success('Register successful');
      navigate(ROUTES.LOGIN);
    } catch (error) {
      if (error instanceof AxiosError && error.response.status === 409) {
        const emailError = 'Email is already in use';
        toast.error(emailError);
        setError('email', {
          message: emailError,
        });
        return;
      }
      toast.error('register failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-w-90">
      <FormFieldInput
        label="name"
        required={false}
        errors={errors?.name?.message}
        authComplete="name"
        {...register('name')}
      />
      <FormFieldInput
        label="Email Address"
        authComplete="email"
        errors={errors?.email?.message}
        {...register('email')}
      />
      <FormFieldInput
        label="Password"
        authComplete="password"
        type="password"
        errors={errors?.password?.message}
        {...register('password')}
      />
      <FormFieldInput
        label="Confirm Password"
        authComplete="confirmPassword"
        type="password"
        errors={errors?.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <FormFieldButton disabled={!isDirty} loading={isSubmitting}>
        Register
      </FormFieldButton>
    </form>
  );
}
