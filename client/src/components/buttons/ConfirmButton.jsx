// client/src/components/buttons/ConfirmButton.jsx
import { Activity } from 'react';
import { useState } from 'react';
import FormFieldButton from '../form-field/FormFieldButton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Spinner } from '../ui/spinner';
import { useTransition } from 'react';

export default function ConfirmButton({ onConfirm, title, children }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleConfirm = async (e) => {
    e.preventDefault();
    if (onConfirm) {
      startTransition(async () => {
        await onConfirm();
        setOpen(false);
      });
    } else {
      setOpen(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{`Are you sure you want to ${title.toLowerCase()} ?`}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isPending} onClick={handleConfirm}>
            <Activity mode={isPending ? 'visible' : 'hidden'}>
              <span className="flex items-center justify-center">
                <Spinner className="mr-2 text-white" />
                loading...
              </span>
            </Activity>
            <Activity mode={isPending ? 'hidden' : 'visible'}>confirm</Activity>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
