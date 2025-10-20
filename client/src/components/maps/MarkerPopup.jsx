// client/src/components/maps/MarkerPopup.jsx
import { Popup } from 'react-leaflet';
import { Button } from '../ui/button';
import { Link } from 'react-router';
import { ROUTES } from '@/constants/router.constant';
import ConfirmButton from '../buttons/ConfirmButton';
import { markerService } from '@/services/marker.service';
import { toast } from 'sonner';
import { useRevalidator } from 'react-router';

export default function MarkerPopup({ marker }) {
  const revalidate = useRevalidator();

  const handleDelete = async () => {
    try {
      await markerService.deleteMarker(marker.id);
      await revalidate.revalidate();
      toast.success('Marker deleted successfully.');
    } catch {
      toast.error('Failed to delete marker. Please try again.');
    }
  };

  return (
    <Popup>
      <div className="p-2 min-w-[200px]">
        <h3 className="font-semibold text-lg mb-2">{marker.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">
          {marker.description}
        </p>

        <div className="space-y-1 text-xs text-muted-foreground border-t pt-2">
          <div className="flex justify-between">
            <span className="font-medium">Coordinates:</span>
            <span>
              {marker.lat.toFixed(4)}, {marker.lng.toFixed(4)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Created:</span>
            <span>{new Date(marker.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button asChild>
              <Link
                style={{ color: 'white' }}
                to={ROUTES.UPDATE_MARKER(marker.id)}
              >
                Edit
              </Link>
            </Button>
            <ConfirmButton title="Delete Marker" onConfirm={handleDelete}>
              <Button variant="destructive" asChild>
                <div>Delete</div>
              </Button>
            </ConfirmButton>
          </div>
        </div>
      </div>
    </Popup>
  );
}
