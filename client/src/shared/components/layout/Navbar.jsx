import { ROUTES } from '@/shared/constants/router';
import MenuItem from '../ui/MenuItem';

export default function Navbar() {
  return (
    <nav>
      <MenuItem to={ROUTES.HOME}>Home</MenuItem>
      <MenuItem to={ROUTES.SIGNIN}>Sign In</MenuItem>
      <MenuItem to={ROUTES.SIGNUP}>Sign Up</MenuItem>
    </nav>
  );
}
