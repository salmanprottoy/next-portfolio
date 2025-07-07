import { type ReactNode, forwardRef } from "react";
import cn from "@/app/utils/cn";

export interface TextProps {
  children: ReactNode;
  as?:
    | "p"
    | "span"
    | "div"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "strong"
    | "em"
    | "small";
  variant?:
    | "body"
    | "body-sm"
    | "body-lg"
    | "heading"
    | "heading-sm"
    | "heading-lg"
    | "caption"
    | "overline";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  color?:
    | "default"
    | "secondary"
    | "tertiary"
    | "muted"
    | "light"
    | "success"
    | "warning"
    | "error"
    | "inherit";
  align?: "left" | "center" | "right" | "justify";
  className?: string;
  id?: string;
  onClick?: () => void;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const variantStyles = {
  body: "text-base leading-relaxed",
  "body-sm": "text-sm leading-relaxed",
  "body-lg": "text-lg leading-relaxed",
  heading: "text-2xl font-semibold leading-tight",
  "heading-sm": "text-xl font-semibold leading-tight",
  "heading-lg": "text-3xl font-bold leading-tight",
  caption: "text-sm leading-relaxed",
  overline: "text-xs font-medium uppercase tracking-wider",
} as const;

const weightStyles = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
} as const;

const colorStyles = {
  default: "text-foreground",
  secondary: "text-foreground-secondary",
  tertiary: "text-foreground-tertiary",
  muted: "text-foreground-muted",
  light: "text-light",
  success: "text-success-600",
  warning: "text-warning-600",
  error: "text-error-600",
  inherit: "text-inherit",
} as const;

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
} as const;

const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      as: Component = "p",
      variant = "body",
      weight = "normal",
      color = "default",
      align = "left",
      className,
      id,
      onClick,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedby,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      variantStyles[variant],
      weightStyles[weight],
      colorStyles[color],
      alignStyles[align],
      className
    );

    return (
      <Component
        ref={ref as any}
        id={id}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export default Text;
