import { Input as MTInput } from '@material-tailwind/react';
import type { PropsWithChildren, ComponentProps } from 'react';

function Input({ children, ...rest }: Partial<PropsWithChildren<ComponentProps<typeof MTInput>>>) {
  return <MTInput {...(rest as ComponentProps<typeof MTInput>)}>{children}</MTInput>;
}

export default Input;
