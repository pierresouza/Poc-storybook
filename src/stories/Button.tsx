import React from "react";
import { Button as UIButton } from "../components/ui/button";
import { cn } from "../utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Which variant style should the button use? */
  variant?: "primary" | "secondary";
  /** How large should the button be? */
  size?: "small" | "medium";
  /** Button contents */
  label?: string;
  /** Optional custom background color/class (e.g. "bg-red-500" or "red-500") */
  bg?: string;
  /** How rounded should the button corners be? */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  /** Optional custom Tailwind CSS classes */
  className?: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Pass asChild to delegate rendering to child element (Radix UI Slot) */
  asChild?: boolean;
}

const roundedClasses: Record<NonNullable<ButtonProps["rounded"]>, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
};

/** Primary UI component for user interaction */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      label,
      bg,
      rounded = "none",
      className,
      icon,
      children,
      asChild,
      ...props
    },
    ref
  ) => {
    const sizeMap = {
      small: "sm",
      medium: "default",
    } as const;

    const variantMap = {
      primary: "default",
      secondary: "secondary",
    } as const;

    const bgClass = bg ? (bg.startsWith("bg-") ? bg : `bg-${bg}`) : "";
    const roundedClass = roundedClasses[rounded] || "rounded-lg";

    return (
      <UIButton
        ref={ref}
        asChild={asChild}
        variant={variantMap[variant] ?? "default"}
        size={sizeMap[size] ?? "default"}
        className={cn(roundedClass, bgClass, className)}
        {...props}
      >
        {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
        {label ?? children}
      </UIButton>
    );
  }
);

Button.displayName = "Button";
