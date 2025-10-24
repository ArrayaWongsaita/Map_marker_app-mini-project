import { authService } from '@/services/auth.service';
import { authStore } from '@/stores/auth.store';
import { useEffect, useTransition } from 'react';

export function UseAuth() {
  const isAuthenticated = authStore((state) => state.isAuthenticated);
  const token = authStore((state) => state.token);
  const logout = authStore((state) => state.logout);
  const user = authStore((state) => state.user);

  const [loading, startTransition] = useTransition();

  useEffect(() => {
    if (token && !user) {
      startTransition(async () => {
        await authService.getCurrentUser();
      });
    }
  }, [token, user]);

  return { isAuthenticated, token, logout, user, loading };
}
