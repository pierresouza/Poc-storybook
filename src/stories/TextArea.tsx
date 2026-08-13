import React from 'react';
import { cn } from '../utils/cn';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** How large should the text area be? */
  size?: 'small' | 'medium' | 'large';
  /** How rounded should the text area corners be? */
  rounded?: 'none' | 'small' | 'medium' | 'large' | 'full';
  /** Is this text area in an error state? */
  error?: boolean;
  /** Optional custom Tailwind CSS classes */
  className?: string;
}

/** Form text area component for collecting longer text */
export const TextArea = ({
  size = 'medium',
  rounded = 'large',
  error = false,
  className,
  rows = 4,
  ...props
}: TextAreaProps) => {
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-3 text-base',
    large: 'px-5 py-4 text-lg',
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
    <textarea
      rows={rows}
      className={cn(
        'min-w-80 border bg-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',
        sizeClasses[size],
        roundedClasses[rounded],
        stateClasses,
        className
      )}
      {...props}
    />
  );
};
