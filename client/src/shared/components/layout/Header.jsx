import { Button } from '../ui/button';
import { ModeToggle } from '../ui/mode-toggle';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className="bg-primary ">
      <header className="py-1 mx-auto max-w-7xl flex justify-between items-center">
        <Button className={'rounded-full'} variant={'ghost'} asChild>
          <div>
            <img src="/icon.png" alt="icon" className="bg-cover w-10" />
          </div>
        </Button>
        <Navbar />
        <div>
          <ModeToggle />
        </div>
      </header>
    </div>
  );
}
