// client/src/components/maps/Map.jsx
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map() {
  return (
    <div>
      <MapContainer
        className="w-full h-screen"
        center={[51.505, -0.09]}
        zoom={6}
      >
        <TileLayer
          attribution={`&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
          url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
          ext="jpg"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
