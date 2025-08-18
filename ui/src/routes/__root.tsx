import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Navigation from '../Navigation';

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <div className="static mt-[64px]">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
