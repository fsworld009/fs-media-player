import { Navbar as MTNavbar } from '@material-tailwind/react';
import type { PropsWithChildren, ComponentProps } from 'react';

function Navbar({
  children,
  className,
}: Partial<PropsWithChildren<ComponentProps<typeof MTNavbar>>>) {
  return (
    <MTNavbar className={className} {...({} as ComponentProps<typeof MTNavbar>)}>
      {children}
    </MTNavbar>
  );
}

export default Navbar;
