import { Outlet } from 'react-router';
import Header from './Header';
import { Toaster } from 'sonner';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
