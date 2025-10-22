import { NavigationItems } from '@/constants/router.constant';
import NavItem from './NavItem';

export default function NavList() {
  return (
    <nav>
      {NavigationItems.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </nav>
  );
}
