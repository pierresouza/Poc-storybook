import React from "react";
import { cn } from "../utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Which variant style should the button use? */
  variant?: "primary" | "secondary";
  /** How large should the button be? */
  size?: "small" | "medium";
  /** Button contents */
  label: string;
  /** Optional custom background color/class (e.g. "bg-red-500" or "red-500") */
  bg?: string;
  /** How rounded should the button corners be? */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  /** Optional custom Tailwind CSS classes */
  className?: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Optional function to handle click */
  onClick?: () => void;
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
export const Button = ({ variant = "primary", size = "medium", label, bg, rounded = "none", className, icon, onClick, ...props }: ButtonProps) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
  };

  const bgClass = bg ? (bg.startsWith("bg-") ? bg : `bg-${bg}`) : "";
  const roundedClass = roundedClasses[rounded] || "rounded-lg";

  const variantClasses = {
    primary: `${bgClass || "bg-blue-600"} text-white hover:bg-blue-700 focus:ring-blue-500`,
    secondary: `${bgClass || "bg-transparent"} text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-400`,
  };

  return (
    <button
      type="button"
      className={cn(
        "font-medium transition-colors duration-200 inline-flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
        roundedClass,
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};
