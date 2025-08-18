import { Typography as MTTypography } from '@material-tailwind/react';
import type { PropsWithChildren, ComponentProps } from 'react';

function Typography({
  as,
  variant,
  color,
  children,
  className,
}: Partial<PropsWithChildren<ComponentProps<typeof MTTypography>>>) {
  return (
    <MTTypography
      as={as}
      variant={variant}
      color={color}
      className={className}
      {...({} as ComponentProps<typeof MTTypography>)}
    >
      {children}
    </MTTypography>
  );
}

export default Typography;
