import cn from "@/app/utils/cn";
import * as React from "react";
import { forwardRef, type ReactNode } from "react";

// Button variants
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

// Button sizes
type ButtonSize = "sm" | "md" | "lg" | "xl";

// Button shapes
type ButtonShape = "rounded" | "pill" | "square";

// Base button props interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
}

// Variant styles mapping
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-transparent text-light border border-transparent hover:border-light active:border-light",
  secondary:
    "bg-secondary-100 text-secondary-800 hover:bg-secondary-200 active:bg-secondary-200 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2",
  outline:
    "border border-primary-300 bg-transparent text-light hover:text-secondary-800 hover:bg-primary-50 active:text-secondary-800 active:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
  ghost:
    "bg-transparent text-primary-900 hover:bg-primary-50 active:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
  destructive:
    "bg-error-500 text-white hover:bg-error-600 active:bg-error-600 focus:ring-2 focus:ring-error-500 focus:ring-offset-2",
};

// Size styles mapping
const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm font-medium sm:px-[30px] sm:py-[5px]",
  md: "text-base font-medium sm:px-[30px] sm:py-[5px] md:px-[35px] md:py-[6px]",
  lg: "text-lg font-medium sm:px-[30px] sm:py-[5px] md:px-[35px] md:py-[6px] lg:px-[40px] lg:py-[6px]",
  xl: "text-xl font-medium sm:px-[30px] sm:py-[5px] md:px-[35px] md:py-[6px] lg:px-[40px] lg:py-[6px] xl:px-[50px] xl:py-[8px]",
};

// Shape styles mapping
const shapeStyles: Record<ButtonShape, string> = {
  rounded: "rounded-md",
  pill: "rounded-full",
  square: "rounded-none",
};

// Loading spinner component
const LoadingSpinner = ({ size = "md" }: { size?: ButtonSize }) => {
  const spinnerSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
  };

  return (
    <svg
      className={cn("animate-spin", spinnerSizes[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      shape = "rounded",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-karla transition-all duration-200 ease-in-out",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "select-none",

          // Variant styles
          variantStyles[variant],

          // Size styles
          sizeStyles[size],

          // Shape styles
          shapeStyles[shape],

          // Width styles
          fullWidth && "w-full",

          // Custom className
          className
        )}
        {...props}
      >
        {/* Left Icon */}
        {leftIcon && !loading && (
          <span
            className={cn(
              "mr-2",
              size === "sm" && "mr-1.5",
              size === "lg" && "mr-2.5",
              size === "xl" && "mr-3"
            )}
          >
            {leftIcon}
          </span>
        )}

        {/* Loading Spinner */}
        {loading && (
          <span
            className={cn(
              "mr-2",
              size === "sm" && "mr-1.5",
              size === "lg" && "mr-2.5",
              size === "xl" && "mr-3"
            )}
          >
            <LoadingSpinner size={size} />
          </span>
        )}

        {/* Button Content */}
        <span className="inline-flex items-center">{children}</span>

        {/* Right Icon */}
        {rightIcon && !loading && (
          <span
            className={cn(
              "ml-2",
              size === "sm" && "ml-1.5",
              size === "lg" && "ml-2.5",
              size === "xl" && "ml-3"
            )}
          >
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
