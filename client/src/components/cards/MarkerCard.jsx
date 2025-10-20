// client/src/components/cards/MarkerCard.jsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function MarkerCard({ title, lat, lng, description, children }) {
  return (
    <Card className="min-w-80">
      {/* header */}
      <CardHeader>
        {/* title  */}
        <CardTitle>{title}</CardTitle>
        {/* description */}
        <CardDescription>
          <div>
            {description}
            <br />
            <p>Latitude: {lat.toFixed(4)}</p>
            <p>Longitude: {lng.toFixed(4)}</p>
          </div>
        </CardDescription>
      </CardHeader>
      {/* content */}
      <CardContent>{children}</CardContent>
    </Card>
  );
}
