import React from 'react';
import { cn } from '../utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** How large should the input be? */
  size?: 'small' | 'medium' | 'large';
  /** How rounded should the input corners be? */
  rounded?: 'none' | 'small' | 'medium' | 'large' | 'full';
  /** Is this input in an error state? */
  error?: boolean;
  /** Optional custom Tailwind CSS classes */
  className?: string;
}

/** Form input component for collecting text and values */
export const Input = ({
  size = 'medium',
  rounded = 'full',
  error = false,
  className,
  type = 'text',
  ...props
}: InputProps) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const roundedClasses = {
    none: 'rounded-none',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-2xl',
    full: 'rounded-full',
  };

  const stateClasses = error
    ? 'border-red-500 text-red-900 placeholder:text-red-300 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 text-gray-800 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500';

  return (
    <input
      type={type}
      className={cn(
        'min-w-64 border bg-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',
        sizeClasses[size],
        roundedClasses[rounded],
        stateClasses,
        className
      )}
      {...props}
    />
  );
};
