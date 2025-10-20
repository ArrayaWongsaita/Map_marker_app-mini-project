// client/src/components/buttons/AuthButton.jsx
import { Link } from 'react-router';
import { Button } from '../ui/button';
import { ROUTES } from '@/constants/router.constant';
import { useAuth } from '@/hooks/UseAuth';
import { Skeleton } from '../ui/skeleton';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function AuthButton() {
  const { user, logout, loading } = useAuth();

  if (loading) {
    return (
      <Button variant="outline" asChild>
        <Skeleton className="h-9 w-20" />
      </Button>
    );
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={ROUTES.LOGIN}>update profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={ROUTES.LOGIN} onClick={logout}>
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <Button variant="outline" asChild>
      <Link to={ROUTES.LOGIN}>Login</Link>
    </Button>
  );
}
