import { type ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  direction: "row" | "col";
  justifyContent?: "start" | "center" | "end" | "between" | "around";
  alignItems?: "start" | "center" | "end" | "flex-end";
  className?: string;
  wrap?: boolean;
  gap?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const justifyContentMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

const alignItemsMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  "flex-end": "items-flex-end",
};

export function Flex(props: Props) {
  const {
    id,
    children,
    className,
    direction,
    justifyContent = direction === "row" ? "start" : "center",
    alignItems = direction === "row" ? "center" : "start",
    wrap = true,
    gap,
    onClick,
  } = props;

  return (
    <div
      id={id}
      className={`flex ${
        wrap && direction === "row" ? "flex-wrap" : "whitespace-nowrap"
      } 
        flex-${direction} 
        ${justifyContentMap[justifyContent] || ""} 
        ${alignItemsMap[alignItems] || ""} 
        ${direction === "row" ? "gap-[16px]" : "gap-[24px]"} 
        ${className}`}
      style={{ gap }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
