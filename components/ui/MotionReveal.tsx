"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import useReducedMotionPreference from "@/hooks/useReducedMotionPreference";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
}

export default function MotionReveal({
  children,
  className,
  delay = 0,
  distance = 24,
  duration = 0.5,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const shouldAnimate = prefersReducedMotion === false;

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: distance } : false}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={shouldAnimate ? { delay, duration, ease: "easeOut" } : { duration: 0 }}
      className={className ? `motion-safe ${className}` : "motion-safe"}
    >
      {children}
    </motion.div>
  );
}
