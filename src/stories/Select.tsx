import React from 'react';
import { cn } from '../utils/cn';

export interface SelectOption {
  /** Option text displayed in the select */
  label: string;
  /** Option value submitted by the select */
  value: string;
  /** Is this option unavailable? */
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select options */
  options: SelectOption[];
  /** Placeholder shown before an option is selected */
  placeholder?: string;
  /** How large should the select be? */
  size?: 'small' | 'medium' | 'large';
  /** Is this select in an error state? */
  error?: boolean;
  /** Optional custom Tailwind CSS classes */
  className?: string;
}

/** Form select component for choosing one option from a list */
export const Select = ({
  options,
  placeholder = 'Selecione uma opcao',
  size = 'medium',
  error = false,
  className,
  id,
  ...props
}: SelectProps) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const stateClasses = error
    ? 'border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500';

  return (
    <select
      id={id}
      className={cn(
        'min-w-64 rounded-full border bg-white font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',
        sizeClasses[size],
        stateClasses,
        className
      )}
      defaultValue=""
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
