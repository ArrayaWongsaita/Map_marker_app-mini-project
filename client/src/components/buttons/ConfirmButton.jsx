// client/src/components/buttons/ConfirmButton.jsx
import { Activity } from 'react';
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

export default function ConfirmButton({ loading, onConfirm, title, children }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{`Are you sure you want to ${title.toLowerCase()} ?`}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={loading} onClick={onConfirm}>
            <Activity mode={loading ? 'visible' : 'hidden'}>
              <span className="flex items-center justify-center">
                <Spinner className="mr-2 text-white" />
                loading...
              </span>
            </Activity>
            <Activity mode={loading ? 'hidden' : 'visible'}>confirm</Activity>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
