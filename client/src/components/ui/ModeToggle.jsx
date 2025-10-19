// client/src/components/ui/ModeToggle.jsx
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';
import { useTheme } from '../providers/theme-provider';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <>
        <Sun
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            theme === 'dark' ? 'scale-0 rotate-90' : 'scale-100 rotate-0'
          }`}
        />
        <Moon
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'
          }`}
        />
      </>
    </Button>
  );
}
