import { Navbar as MTNavbar } from '@material-tailwind/react';
import type { PropsWithChildren, ComponentProps } from 'react';

function Navbar({ children }: Partial<PropsWithChildren<ComponentProps<typeof MTNavbar>>>) {
  return <MTNavbar {...({} as ComponentProps<typeof MTNavbar>)}>{children}</MTNavbar>;
}

export default Navbar;
