// src/components/layouts/MainLayout.jsx
import { Outlet } from 'react-router';
import Header from './Header';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
