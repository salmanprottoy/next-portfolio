import { type ReactNode, forwardRef } from "react";
import cn from "@/app/utils/cn";

export interface FlexProps {
  children: ReactNode;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  id?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  "aria-label"?: string;
  "aria-describedby"?: string;
  role?: string;
}

const directionStyles = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
} as const;

const justifyStyles = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
} as const;

const alignStyles = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch",
} as const;

const wrapStyles = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
} as const;

const gapStyles = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
  "3xl": "gap-16",
} as const;

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      direction = "row",
      justify = "start",
      align = "start",
      wrap = "nowrap",
      gap = "none",
      className,
      id,
      onClick,
      onMouseEnter,
      onMouseLeave,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedby,
      role,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "flex",
      directionStyles[direction],
      justifyStyles[justify],
      alignStyles[align],
      wrapStyles[wrap],
      gapStyles[gap],
      className
    );

    return (
      <div
        ref={ref}
        id={id}
        className={classes}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        role={role}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";

export default Flex;
