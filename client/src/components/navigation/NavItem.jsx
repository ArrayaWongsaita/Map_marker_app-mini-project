import { cn } from '@/lib/utils';
import { NavLink } from 'react-router';

export default function NavItem({ item, className = '' }) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          {
            'border-b-2 border-secondary font-bold transition-all': isActive,
          },
          'p-2 text-white',
          className
        )
      }
      to={item.path}
    >
      {item.label}
    </NavLink>
  );
}
