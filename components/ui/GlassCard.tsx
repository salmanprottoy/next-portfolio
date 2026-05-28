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
        "rounded-2xl p-6 md:p-8",
        gradientBorder ? "gradient-border" : "glass",
        glow && "shadow-[0_0_30px_var(--glow-primary)]",
        hover && "glow-hover transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
