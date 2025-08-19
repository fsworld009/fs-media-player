import { Typography as MTTypography } from '@material-tailwind/react';
import type { PropsWithChildren, ComponentProps } from 'react';

function Typography({
  children,
  ...rest
}: Partial<PropsWithChildren<ComponentProps<typeof MTTypography>>>) {
  return <MTTypography {...(rest as ComponentProps<typeof MTTypography>)}>{children}</MTTypography>;
}

export default Typography;
