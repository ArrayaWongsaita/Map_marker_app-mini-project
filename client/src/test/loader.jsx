import { ROUTES } from '@/constants/router.constant';
import { redirect } from 'react-router';

export const testLoadData = () => {
  return redirect(ROUTES.LOGIN);
};
