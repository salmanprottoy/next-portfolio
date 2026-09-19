"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  gradientBorder?: boolean;
  glow?: boolean;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  gradientBorder = false,
  glow = false,
  hover = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "border border-border bg-card p-6 md:p-7",
        glow && "shadow-[0_0_24px_var(--glow-primary)]",
        hover && "hover:border-primary/20 transition-[border-color,box-shadow] duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
