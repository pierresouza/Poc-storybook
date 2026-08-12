import React from 'react';
import { cn } from '../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional custom Tailwind CSS classes */
  className?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  className,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const variantClasses = primary
    ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
    : 'bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-400';

  return (
    <button
      type="button"
      className={cn(
        'font-semibold rounded-full transition-colors duration-200 inline-flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2',
        sizeClasses[size],
        variantClasses,
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
