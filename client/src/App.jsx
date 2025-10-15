// src/App.jsx
import { RouterProvider } from 'react-router';
import { router } from './shared/router';

export default function App() {
  return <RouterProvider router={router} />;
}
