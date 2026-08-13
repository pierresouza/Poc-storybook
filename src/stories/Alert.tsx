import React from 'react';
import { cn } from '../utils/cn';

export const AlertUtils = {
  Type: {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
  },
  Colors: {
    SUCCESS: '#8DC773',
    ERROR: '#FD756D',
    WARNING: '#EAAA5E',
    INFO: '#5BBCF2',
  },
  Position: {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center',
  },
} as const;

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert semantic type. */
  type?: 'success' | 'info' | 'warning' | 'error';
  /** Should the alert icon be shown? */
  showIcon?: boolean;
  /** Optional custom icon. */
  icon?: React.ReactNode;
  /** Main alert message. */
  message: React.ReactNode;
  /** Supporting alert description. */
  description?: React.ReactNode;
  /** Should the alert be dismissible? */
  closable?: boolean;
  /** Optional close button text. */
  closeText?: string;
  /** Callback fired after the alert is closed. */
  afterClose?: () => void;
  /** Optional custom Tailwind CSS classes. */
  className?: string;
}

const typeClasses = {
  success: 'border-b-[#8DC773]',
  error: 'border-b-[#FD756D]',
  warning: 'border-b-[#EAAA5E]',
  info: 'border-b-[#5BBCF2]',
};

const iconColorClasses = {
  success: 'text-[#8DC773]',
  error: 'text-[#FD756D]',
  warning: 'text-[#EAAA5E]',
  info: 'text-[#5BBCF2]',
};

const alertIcons = {
  success: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 8v5" strokeLinecap="round" />
      <path d="M12 17h.01" strokeLinecap="round" />
      <path d="M10.3 4.6 2.7 18a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 4.6a2 2 0 0 0-3.4 0Z" strokeLinejoin="round" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 11v6" strokeLinecap="round" />
      <path d="M12 7h.01" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
};

const AlertBase = ({
  type = 'info',
  showIcon = true,
  icon,
  message,
  description,
  closable = true,
  closeText = '',
  afterClose,
  className,
  ...props
}: AlertProps) => {
  const [visible, setVisible] = React.useState(true);

  const handleClose = () => {
    setVisible(false);
    afterClose?.();
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      role="alert"
      className={cn(
        'w-full max-w-3xl border-b-4 bg-[#333638] px-4 py-3 text-left text-white shadow-md',
        typeClasses[type],
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        {showIcon && (
          <span
            className={cn(
              'mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white/10',
              iconColorClasses[type]
            )}
          >
            {icon ?? alertIcons[type]}
          </span>
        )}

        <div className="min-w-0 flex-1">
          <p className="font-bold leading-6">{message}</p>
          {description && <p className="mt-1 text-sm font-normal leading-5 text-white/85">{description}</p>}
        </div>

        {closable && (
          <button
            type="button"
            className="ml-2 inline-flex min-h-6 items-center justify-center rounded-md px-2 text-sm font-semibold text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#333638]"
            aria-label="Fechar alerta"
            onClick={handleClose}
          >
            {closeText || 'X'}
          </button>
        )}
      </div>
    </div>
  );
};

export const Alert = Object.assign(AlertBase, {
  Utils: AlertUtils,
});
