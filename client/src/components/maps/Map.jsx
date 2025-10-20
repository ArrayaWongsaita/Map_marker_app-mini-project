// client/src/components/maps/Map.jsx
import { tileLayers } from '@/constants/map.constant';

import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import MarkerDetail from './MarkerDetail';
import { useLoaderData } from 'react-router';

export default function Map() {
  const { markers } = useLoaderData();

  return (
    <div>
      <MapContainer
        className="w-full  h-[80vh] "
        center={[markers[0].lat, markers[0].lng]}
        zoom={11}
      >
        <LayersControl position="topright">
          {/* tile Layers */}
          {tileLayers.map((layer, index) => (
            <LayersControl.BaseLayer
              checked={layer.checked}
              name={layer.name}
              key={index}
            >
              <TileLayer attribution={layer.attribution} url={layer.url} />
            </LayersControl.BaseLayer>
          ))}
          {/* Markers Layer */}
          {markers.map((marker) => (
            <MarkerDetail key={marker.id} marker={marker} />
          ))}
          ;
        </LayersControl>
      </MapContainer>
    </div>
  );
}
