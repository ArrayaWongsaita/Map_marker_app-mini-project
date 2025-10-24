import { RouterProvider } from 'react-router';
import { router } from './router';
import 'leaflet/dist/leaflet.css';

export default function App() {
  return <RouterProvider router={router} />;
}
