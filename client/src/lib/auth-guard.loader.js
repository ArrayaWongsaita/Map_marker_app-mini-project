// client/src/lib/auth-guard.loader.js
import { redirect } from 'react-router';
import { ROUTES } from '@/constants/router.constant';
import { authService } from '@/services/auth.service';
import { authStore } from '@/stores/auth.store';

export function authGuard(data = {}) {
  const { allowedRoles, loader } = data;
  return async function guardedLoader(args) {
    const { token, user } = authStore.getState();
    console.log('loader -------');
    if (!token) {
      throw redirect(ROUTES.LOGIN);
    }

    let currentUser = user;

    // console.log('currentUser', currentUser);
    if (!currentUser) {
      try {
        const response = await authService.getCurrentUser();
        currentUser = response.user;
      } catch (err) {
        console.error('authGuard.getCurrentUser error:', err);
        throw redirect(ROUTES.LOGIN);
      }
    }

    if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
      throw redirect(ROUTES.LOGIN);
    }

    if (loader) {
      return loader(args);
    }

    return null;
  };
}
