import { Button as MTButton } from '@material-tailwind/react';
import type { PropsWithChildren, ComponentProps } from 'react';

function Button({
  children,
  onClick,
  className,
}: Partial<PropsWithChildren<ComponentProps<typeof MTButton>>>) {
  return (
    <MTButton onClick={onClick} className={className} {...({} as ComponentProps<typeof MTButton>)}>
      {children}
    </MTButton>
  );
}

export default Button;
