import { createBrowserRouter, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import HomePage from '@/features/home/pages/HomePage';
import { ROUTES } from '../constants/router';
import SigninPage from '@/features/auth/pages/SigninPage';
import SignupPage from '@/features/auth/pages/SignupPage';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.SIGNIN, element: <SigninPage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
      { path: '*', element: <Navigate to={ROUTES.HOME} replace /> },
    ],
  },
]);
