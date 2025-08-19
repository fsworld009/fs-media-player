import { Button as MTButton } from '@material-tailwind/react';
import type { PropsWithChildren, ComponentProps } from 'react';

function Button({
  children,
  ...rest
}: Partial<PropsWithChildren<ComponentProps<typeof MTButton>>>) {
  return <MTButton {...(rest as ComponentProps<typeof MTButton>)}>{children}</MTButton>;
}

export default Button;
