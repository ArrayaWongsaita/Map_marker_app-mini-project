import MarkerCard from '@/components/cards/MarkerCard';
import MarkerForm from '@/components/forms/MarkerForm';
import { useLoaderData } from 'react-router';

export default function UpdateMarkerPage() {
  const data = useLoaderData();
  const marker = data?.marker || null;
  if (!marker) {
    return <div>Error: Marker not found</div>;
  }
  const defaultValues = {
    lat: marker.lat,
    lng: marker.lng,
    title: marker.title,
    description: marker.description,
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <MarkerCard
        lat={defaultValues.lat}
        lng={defaultValues.lng}
        title="Update Marker"
        description={'Update the details below to modify the marker.'}
      >
        <MarkerForm defaultValues={defaultValues} mode="update" />
      </MarkerCard>
    </div>
  );
}
