import React from 'react';
import { cn } from '../utils/cn';

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Main content in the modal. */
  children: React.ReactNode;
}

/** Container for content in Modal. */
export const ModalContent = ({ className, children, ...props }: ModalContentProps) => (
  <div className={cn('px-6 py-5 text-sm leading-6 text-gray-700', className)} {...props}>
    {children}
  </div>
);
