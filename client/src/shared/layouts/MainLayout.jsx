import { Outlet } from 'react-router';
import Header from '../components/layout/Header';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
