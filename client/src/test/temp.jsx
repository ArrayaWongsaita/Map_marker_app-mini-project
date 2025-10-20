import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import { Button } from '../ui/button';

const markers = [
  {
    id: 1,
    name: 'Bangkok',
    lat: 13.7563,
    lng: 100.5018,
    description: 'Capital of Thailand',
  },
  {
    id: 2,
    name: 'Phuket',
    lat: 8.1217,
    lng: 98.3099,
    description: 'Beach city in southern Thailand',
  },
  {
    id: 3,
    name: 'Chiang Mai',
    lat: 18.7883,
    lng: 98.9853,
    description: 'City in northern Thailand',
  },
  {
    id: 4,
    name: 'Pattaya',
    lat: 12.9251,
    lng: 100.8863,
    description: 'Coastal city east of Bangkok',
  },
];

const tileLayers = [
  {
    name: 'OpenStreetMap',
    checked: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'CartoDB Positron',
    checked: false,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  },
  {
    name: 'MemoMaps',
    checked: false,
    attribution:
      'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
  },
  {
    name: 'Esri Satellite',
    checked: false,
    attribution: 'Tiles &copy; Esri',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'Stamen Toner',
    checked: false,
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>',
    url: 'https://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
  },
];

function MapClickHandler() {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      alert(`Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`);
    },
  });
  return null;
}

export default function Map() {
  return (
    <MapContainer
      center={[13.7563, 100.5018]}
      zoom={6}
      style={{ height: '100%', width: '100%' }}
    >
      <MapClickHandler />
      <LayersControl position="topright">
        {/* Tile Layers */}
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
          <LayersControl.Overlay checked name={marker.name} key={marker.id}>
            <LayerGroup>
              <Marker position={[marker.lat, marker.lng]}>
                <Popup>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0' }}>{marker.name}</h3>
                    <p style={{ margin: '0' }}>{marker.description}</p>
                    <Button>Details</Button>
                  </div>
                </Popup>
              </Marker>
            </LayerGroup>
          </LayersControl.Overlay>
        ))}
      </LayersControl>
    </MapContainer>
  );
}
