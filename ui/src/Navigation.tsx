import { Link } from '@tanstack/react-router';
import Navbar from './components/Navbar';

function Navigation() {
  return (
    <>
      {/* <div className="h-[40px] max-w-full"> */}
      <div className="fixed top-0 left-0 z-10 h-[60px] w-screen">
        <Navbar className=" bg-white rounded-xl">
          <div className="flex items-center justify-start p-1">
            <span className="mr-4 cursor-pointer text-red-900 py-1.5 font-medium">
              Media Player
            </span>
            <Link to="/" className="mr-2">
              Home
            </Link>
            <Link to="/player" className="mr-2">
              Player
            </Link>
          </div>
        </Navbar>
      </div>
      {/* </div> */}
    </>
  );
}

export default Navigation;
