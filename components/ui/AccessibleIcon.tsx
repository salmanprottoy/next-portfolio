import { createElement, type ElementType } from "react";

interface BaseAccessibleIconProps {
  icon: ElementType;
  className?: string;
}

type AccessibleIconProps =
  | (BaseAccessibleIconProps & {
      decorative?: true;
      label?: never;
    })
  | (BaseAccessibleIconProps & {
      decorative: false;
      label: string;
    });

export default function AccessibleIcon({
  icon,
  className,
  decorative = true,
  label,
}: AccessibleIconProps) {
  return createElement(icon, {
    className,
    "aria-hidden": decorative ? true : undefined,
    "aria-label": decorative ? undefined : label,
    focusable: decorative ? false : undefined,
    role: decorative ? undefined : "img",
  });
}
