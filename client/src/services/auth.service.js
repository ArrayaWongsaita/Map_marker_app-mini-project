import { authStore } from '@/stores/auth.store';
import { publicAxiosInstance } from './api/axios.instance';

export const authService = {
  login: async (data) => {
    const response = await publicAxiosInstance.post('/auth/login', data);
    authStore.getState().setToken(response.data.token);
    authStore.getState().setUser(response.data.user);
    return response.data;
  },
  register: async (data) => {
    const response = await publicAxiosInstance.post('/auth/register', data);
    return response.data;
  },
  getCurrentUser: async () => {
    const response = await publicAxiosInstance.get('/auth/profile');
    authStore.getState().setUser(response.data.user);
    return response.data;
  },
};
