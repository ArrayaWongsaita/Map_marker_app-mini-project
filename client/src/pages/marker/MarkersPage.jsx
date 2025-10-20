// client/src/pages/marker/MarkersPage.jsx
import Map from '@/components/maps/Map';
import { Input } from '@/components/ui/input';
import QueryInput from '@/components/ui/QueryInput';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

export default function MarkersPage() {
  return (
    <div className="p-4 h-min-screen -mt-8 pt-10 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold mb-2">Markers Map</h1>
      </div>
      <div className="w-1/2 mb-4">
        <QueryInput placeholder="ค้นหา marker" />
      </div>
      <div className="w-full h-full">
        <Map />
      </div>
    </div>
  );
}
