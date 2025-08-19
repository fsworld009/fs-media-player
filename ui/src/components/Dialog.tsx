import {
  Dialog as MTDialog,
  DialogHeader as MTDialogHeader,
  DialogBody as MTDialogBody,
  DialogFooter as MTDialogFooter,
} from '@material-tailwind/react';
import type { PropsWithChildren, ComponentProps } from 'react';

export function Dialog({
  children,
  ...rest
}: Partial<PropsWithChildren<ComponentProps<typeof MTDialog>>>) {
  return <MTDialog {...(rest as ComponentProps<typeof MTDialog>)}>{children}</MTDialog>;
}

export function DialogHeader({
  children,
  ...rest
}: Partial<PropsWithChildren<ComponentProps<typeof MTDialogHeader>>>) {
  return (
    <MTDialogHeader {...(rest as ComponentProps<typeof MTDialogHeader>)}>{children}</MTDialogHeader>
  );
}

export function DialogBody({
  children,
  ...rest
}: Partial<PropsWithChildren<ComponentProps<typeof MTDialogBody>>>) {
  return <MTDialogBody {...(rest as ComponentProps<typeof MTDialogBody>)}>{children}</MTDialogBody>;
}

export function DialogFooter({
  children,
  ...rest
}: Partial<PropsWithChildren<ComponentProps<typeof MTDialogFooter>>>) {
  return (
    <MTDialogFooter {...(rest as ComponentProps<typeof MTDialogFooter>)}>{children}</MTDialogFooter>
  );
}
