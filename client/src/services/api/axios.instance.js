// client/src/services/api/axios.instance.js

import { env } from '@/configs/env.config';
import { ROUTES } from '@/constants/router.constant';
import { authStore } from '@/stores/auth.store';
import axios from 'axios';

const config = {
  baseURL: env.VITE_API_URL,
};

export const publicAxiosInstance = axios.create(config);

publicAxiosInstance.interceptors.request.use(
  (config) => {
    // ใส่ token จาก store ถ้ามี
    const token = authStore.getState().token;
    if (token && config.headers)
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

publicAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // จัดการข้อผิดพลาดที่เกี่ยวข้องกับการยืนยันตัวตน
    if (
      error.response &&
      error.response.status === 401 &&
      // check path not to be /login or /register
      ![ROUTES.LOGIN, ROUTES.REGISTER].includes(window.location.pathname)
    ) {
      authStore.getState().logout();
      // redirect to login page or show a message
      window.location.href = ROUTES.LOGIN;
    }
    return Promise.reject(error);
  }
);
