// client/src/components/layouts/Header.jsx
import AuthButton from '../buttons/AuthButton';
import IconButton from '../buttons/IconButton';
import NavList from '../navigation/NavList';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-primary p-2">
      <div>
        <IconButton />
      </div>
      <div>
        <NavList />
      </div>
      <div className="flex justify-center items-center gap-4">
        <AuthButton />
      </div>
    </header>
  );
}
