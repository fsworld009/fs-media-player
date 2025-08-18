import { Link } from '@tanstack/react-router';
import Navbar from './components/Navbar';
import Typography from './components/Typography';

function Navigation() {
  return (
    <>
      <Navbar className="sticky top-0 z-10 w-screen bg-white rounded-xl px-4 py-2">
        <div className="flex items-center justify-start">
          <Typography as="span" color="purple" className="mr-4 font-medium">
            Media Player
          </Typography>
          <Link to="/" className="mr-2">
            Home
          </Link>
          <Link to="/player" className="mr-2">
            Player
          </Link>
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
