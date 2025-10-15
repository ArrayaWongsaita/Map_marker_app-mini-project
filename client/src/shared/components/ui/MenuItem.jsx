import { cn } from '@/shared/lib/utils';
import { NavLink } from 'react-router';

export default function MenuItem({ children, className, to, ...props }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'px-3 py-2  text-sm font-medium ',
          isActive ? 'border-b-2 border-foreground font-bold' : '',
          className
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}
