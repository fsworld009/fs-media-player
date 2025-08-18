import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Navigation from '../Navigation';

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <div className="m-0 mt-4 h-screen">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
