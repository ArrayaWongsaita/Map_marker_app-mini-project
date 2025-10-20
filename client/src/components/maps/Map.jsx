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
import MapAction from './MapAction';

export default function Map() {
  const data = useLoaderData();
  const markers = data?.markers || [];

  return (
    <div>
      <MapContainer
        className="w-full  h-[80vh] "
        center={[markers[0]?.lat || 0, markers[0]?.lng || 0]}
        zoom={11}
      >
        <MapAction />
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
