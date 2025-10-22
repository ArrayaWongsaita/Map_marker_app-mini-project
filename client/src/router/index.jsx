import MainLayout from '@/components/layouts/MainLayout';
import { ROUTES } from '@/constants/router.constant';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import HomePage from '@/pages/home/HomePage';
import CreateMarkerPage from '@/pages/marker/CreateMarkerPage';
import MarkersPage from '@/pages/marker/MarkersPage';
import UpdateMarkerPage from '@/pages/marker/UpdateMarkerPage';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      // home
      { index: true, element: <HomePage /> },
      // auth
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.REGISTER, element: <RegisterPage /> },
      // marker
      { path: ROUTES.MARKERS, element: <MarkersPage /> },
      { path: ROUTES.CREATE_MARKER, element: <CreateMarkerPage /> },
      { path: ROUTES.UPDATE_MARKER_PATH, element: <UpdateMarkerPage /> },
      // not found
      { path: '*', element: <Navigate to={ROUTES.HOME} replace /> },
    ],
  },
]);
