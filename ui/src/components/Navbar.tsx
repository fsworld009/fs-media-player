import { Navbar as MTNavbar } from '@material-tailwind/react';
import type { PropsWithChildren, ComponentProps } from 'react';

function Navbar({
  children,
  ...rest
}: Partial<PropsWithChildren<ComponentProps<typeof MTNavbar>>>) {
  return <MTNavbar {...(rest as ComponentProps<typeof MTNavbar>)}>{children}</MTNavbar>;
}

export default Navbar;
