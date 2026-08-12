import React from 'react';
import { cn } from '../utils/cn';

export interface ModalButtonBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Buttons in the modal bar. */
  children: React.ReactNode;
}

/** Container for buttons in Modal. */
export const ModalButtonBar = ({ className, children, ...props }: ModalButtonBarProps) => (
  <div className={cn('flex justify-end gap-3 border-t border-gray-200 px-6 py-4', className)} {...props}>
    {children}
  </div>
);
