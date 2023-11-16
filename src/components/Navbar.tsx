import Logo from './ui/logo.tsx';
import { Separator } from './ui/separator.tsx';
import { Button } from './ui/button.tsx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-white w-full h-24 flex flex-col">
      <div className="w-full h-full py-8 px-16 flex flex-row justify-between">
        <Logo />
        <div className='w-1/4 h-full flex  justify-between items-center'>
          <Button variant="outline" className='hover:text-white hover:bg-primary transition-all duration-300'>
            <Link to="/recipe/add">New Recipe</Link>
          </Button>
          <Button variant="link" className='hover:text-neutral-600 transition-all'>
            <Link to="/recipe">My Recipes</Link>
          </Button>
          <Button variant="link" className='hover:text-neutral-600 transition-all'>
            <Link to="/collection">My Collections</Link>
          </Button>
        </div>
      </div>
      <Separator className="w-screen" />
    </div>
  );
};

export default Navbar;
