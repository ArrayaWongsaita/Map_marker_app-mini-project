// client/src/pages/marker/MarkersPage.jsx
import Map from '@/components/maps/Map';
import { Input } from '@/components/ui/input';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

export default function MarkersPage() {
  return (
    <div className="p-4 h-min-screen -mt-8 pt-10 flex flex-col justify-center items-center">
      <div className="w-full h-full">
        <Map />
      </div>
    </div>
  );
}
