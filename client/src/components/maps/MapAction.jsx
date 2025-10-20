// client/src/components/maps/MapAction.jsx
import { ROUTES } from '@/constants/router.constant';
import { useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router';

export default function MapAction() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      const searchParams = new URLSearchParams();
      searchParams.set('lat', lat);
      searchParams.set('lng', lng);
      navigate({
        pathname: ROUTES.CREATE_MARKER,
        search: searchParams.toString(),
      });
    },
  });
  return null;
}
