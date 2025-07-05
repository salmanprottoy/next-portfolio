import { type ReactNode, forwardRef } from "react";
import cn from "@/app/utils/cn";

export interface GridProps {
  children: ReactNode;
  cols?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | "auto-fit"
    | "auto-fill";
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | "auto" | "auto-fit" | "auto-fill";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  gapX?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  gapY?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  flow?: "row" | "column" | "dense" | "row-dense" | "column-dense";
  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  className?: string;
  id?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  "aria-label"?: string;
  "aria-describedby"?: string;
  role?: string;
}

const colsStyles = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
  auto: "grid-cols-auto",
  "auto-fit": "grid-cols-auto-fit",
  "auto-fill": "grid-cols-auto-fill",
} as const;

const rowsStyles = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
  auto: "grid-rows-auto",
  "auto-fit": "grid-rows-auto-fit",
  "auto-fill": "grid-rows-auto-fill",
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

const gapXStyles = {
  none: "gap-x-0",
  xs: "gap-x-1",
  sm: "gap-x-2",
  md: "gap-x-4",
  lg: "gap-x-6",
  xl: "gap-x-8",
  "2xl": "gap-x-12",
  "3xl": "gap-x-16",
} as const;

const gapYStyles = {
  none: "gap-y-0",
  xs: "gap-y-1",
  sm: "gap-y-2",
  md: "gap-y-4",
  lg: "gap-y-6",
  xl: "gap-y-8",
  "2xl": "gap-y-12",
  "3xl": "gap-y-16",
} as const;

const flowStyles = {
  row: "grid-flow-row",
  column: "grid-flow-col",
  dense: "grid-flow-dense",
  "row-dense": "grid-flow-row-dense",
  "column-dense": "grid-flow-col-dense",
} as const;

const justifyStyles = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  stretch: "justify-stretch",
} as const;

const alignStyles = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch",
} as const;

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      cols = 1,
      rows,
      gap = "none",
      gapX,
      gapY,
      flow = "row",
      justify = "start",
      align = "start",
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
      "grid w-full",
      colsStyles[cols],
      rows && rowsStyles[rows],
      gapStyles[gap],
      gapX && gapXStyles[gapX],
      gapY && gapYStyles[gapY],
      flowStyles[flow],
      justifyStyles[justify],
      alignStyles[align],
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

Grid.displayName = "Grid";
