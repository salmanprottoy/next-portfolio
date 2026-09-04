"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import AccessibleIcon from "@/components/ui/AccessibleIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import useReducedMotionPreference from "@/hooks/useReducedMotionPreference";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const prefersReducedMotion = useReducedMotionPreference();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full glass flex items-center justify-center" aria-hidden="true">
        <AccessibleIcon icon={Sun} className="h-4 w-4 opacity-0" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-ring touch-target motion-safe relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full glass glow-hover"
      whileTap={prefersReducedMotion === true ? undefined : { scale: 0.9 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
        transition={prefersReducedMotion === true ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <AccessibleIcon icon={Moon} className="h-4 w-4 text-primary" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? -180 : 0, scale: isDark ? 0 : 1 }}
        transition={prefersReducedMotion === true ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <AccessibleIcon icon={Sun} className="h-4 w-4 text-amber-500" />
      </motion.div>
    </motion.button>
  );
}
