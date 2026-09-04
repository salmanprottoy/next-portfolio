"use client";

import { ReactNode } from "react";
import MotionReveal from "@/components/ui/MotionReveal";

export default function SectionMotion({ children }: { children: ReactNode }) {
  return (
    <MotionReveal
      distance={50}
      duration={0.8}
      className="motion-safe relative z-10 mx-auto w-full max-w-7xl"
    >
      {children}
    </MotionReveal>
  );
}
