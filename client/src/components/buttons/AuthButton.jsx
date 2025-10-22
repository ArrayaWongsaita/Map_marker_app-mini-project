import { Link } from 'react-router';
import { Button } from '../ui/button';
import { ROUTES } from '@/constants/router.constant';

export default function AuthButton() {
  return (
    <>
      <Button variant="outline" asChild>
        <Link to={ROUTES.LOGIN}>login</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link to={ROUTES.REGISTER}>Register</Link>
      </Button>
    </>
  );
}
