import { LayerGroup, LayersControl, Marker } from 'react-leaflet';
import MarkerPopup from './MarkerPopup';

export default function MarkerDetail({ marker }) {
  return (
    <LayersControl.Overlay checked name={marker.title} key={marker.id}>
      <LayerGroup>
        <Marker position={[marker.lat, marker.lng]}>
          <MarkerPopup marker={marker} />
        </Marker>
      </LayerGroup>
    </LayersControl.Overlay>
  );
}
