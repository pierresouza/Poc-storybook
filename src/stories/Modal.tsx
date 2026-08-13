import React from 'react';
import ReactDOM from 'react-dom';
import { cn } from '../utils/cn';

const getModalContainer = (modalRootId: string) => {
  if (typeof document === 'undefined') {
    return undefined;
  }

  let portalContainer = document.getElementById(modalRootId);

  if (!portalContainer) {
    portalContainer = document.createElement('div');
    portalContainer.setAttribute('id', modalRootId);
    document.body.appendChild(portalContainer);
  }

  return portalContainer;
};

export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Is the modal visible? */
  isOpen?: boolean;
  /** Is the modal visible? */
  open?: boolean;
  /** Modal title */
  title: React.ReactNode;
  /** How large should the modal be? */
  size?: 'small' | 'medium' | 'large';
  /** How rounded should the modal corners be? */
  rounded?: 'none' | 'small' | 'medium' | 'large';
  /** Flag whether modal is dismissible. */
  isDismissible?: boolean;
  /** Should clicking the overlay close the modal? */
  closeOnExternalClick?: boolean;
  /** Should pressing Escape close the modal? */
  closeOnEsc?: boolean;
  /** Callback fired when the modal requests to close */
  onClose?: (event?: React.SyntheticEvent | KeyboardEvent) => void;
  /** Id of the root where the modal will be rendered in. */
  modalRootId?: string;
  /** Optional custom Tailwind CSS classes for the overlay */
  overlayClassName?: string;
}

/** Dialog component for focused content and actions */
export const Modal = ({
  isOpen,
  open,
  title,
  size = 'medium',
  rounded = 'large',
  isDismissible = true,
  closeOnExternalClick = true,
  closeOnEsc = true,
  onClose,
  modalRootId = 'modal-root',
  overlayClassName,
  className,
  children,
  ...props
}: ModalProps) => {
  const visible = isOpen ?? open ?? false;
  const titleId = React.useId();
  const container = getModalContainer(modalRootId);

  React.useEffect(() => {
    if (!visible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  React.useEffect(() => {
    if (!visible || !isDismissible || !closeOnEsc) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeOnEsc, isDismissible, onClose, visible]);

  if (!container || !visible) {
    return null;
  }

  const sizeClasses = {
    small: 'max-w-sm',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
  };

  const roundedClasses = {
    none: 'rounded-none',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-2xl',
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDismissible && closeOnExternalClick) {
      onClose?.(event);
    }
  };

  return ReactDOM.createPortal(
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4',
        overlayClassName
      )}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          'w-full border border-gray-200 bg-white text-gray-900 shadow-xl',
          sizeClasses[size],
          roundedClasses[rounded],
          className
        )}
        onClick={(event) => event.stopPropagation()}
        {...props}
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-6 py-4">
          <h2 id={titleId} className="text-lg font-semibold text-gray-900">
            {title}
          </h2>
          {isDismissible && onClose && (
            <button
              type="button"
              aria-label="Fechar modal"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={onClose}
            >
              X
            </button>
          )}
        </div>

        {children}
      </div>
    </div>,
    container
  );
};
