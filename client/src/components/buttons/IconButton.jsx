// client/src/components/buttons/IconButton.jsx
import { Link } from 'react-router';
import { Button } from '../ui/button';
import { ROUTES } from '@/constants/router.constant';

export default function IconButton() {
  return (
    <Button variant="ghost" asChild>
      <Link to={ROUTES.HOME}>
        <img
          className="w-8 h-8 object-contain"
          src="/icon.png"
          alt="home-image"
        />
      </Link>
    </Button>
  );
}
