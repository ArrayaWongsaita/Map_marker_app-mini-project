import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createMarkerSchema,
  updateMarkerSchema,
} from '@/schemas/marker.schema';
import FormFieldInput from '../form-field/FormFieldInput';
import { Button } from '../ui/button';
import { ROUTES } from '@/constants/router.constant';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import ConfirmButton from '../buttons/ConfirmButton';
import { toast } from 'sonner';
import { markerService } from '@/services/marker.service';
import { useParams } from 'react-router';

export default function MarkerForm({ defaultValues, mode }) {
  const schema = mode === 'create' ? createMarkerSchema : updateMarkerSchema;
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      if (mode === 'create') {
        await markerService.createMarker(data);
        toast.success('Marker created successfully!');
        navigate(ROUTES.MARKERS);
      } else {
        await markerService.updateMarker(id, data);
        toast.success('Marker updated successfully!');
        navigate(ROUTES.MARKERS);
      }
    } catch {
      if (mode === 'create') {
        toast.error('Failed to create marker.');
      } else {
        toast.error('Failed to update marker.');
      }
    }
  };
  return (
    <div className="min-w-96">
      <FormFieldInput
        {...register('title')}
        label="Title"
        errors={errors.title?.message}
      />
      <FormFieldInput
        required={false}
        {...register('description')}
        label="Description"
        errors={errors.description?.message}
      />

      <div className="flex justify-end gap-2 mt-4">
        <Button
          type="button"
          className="flex-1"
          variant="secondary"
          onClick={() => navigate(ROUTES.MARKERS)}
        >
          back
        </Button>

        <ConfirmButton
          title="create marker"
          onConfirm={async () => {
            await handleSubmit(onSubmit)();
          }}
        >
          <Button
            type="button"
            className="flex-1"
            disabled={isSubmitting || !isValid}
          >
            {mode}
          </Button>
        </ConfirmButton>
      </div>
    </div>
  );
}
