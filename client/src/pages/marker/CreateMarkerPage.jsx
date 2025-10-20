import MarkerCard from '@/components/cards/MarkerCard';
import MarkerForm from '@/components/forms/MarkerForm';
import { useSearchParams } from 'react-router';

export default function CreateMarkerPage() {
  const [searchParams] = useSearchParams();
  const lat = parseFloat(searchParams.get('lat'));
  const lng = parseFloat(searchParams.get('lng'));

  if (!lat || !lng) {
    return <div>Error: Latitude and Longitude are required</div>;
  }
  const defaultValues = {
    lat: lat,
    lng: lng,
    title: '',
    description: '',
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <MarkerCard
        lat={lat}
        lng={lng}
        title="Create Marker"
        description={'Fill in the details below to create a new marker.'}
      >
        <MarkerForm defaultValues={defaultValues} mode="create" />
      </MarkerCard>
    </div>
  );
}
