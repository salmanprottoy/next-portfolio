"use client";

import { MotionConfig, type MotionConfigProps } from "framer-motion";
import { useTheme } from "next-themes";
import { type ReactNode, useEffect } from "react";
import useReducedMotionPreference, {
  ReducedMotionProvider,
} from "@/hooks/useReducedMotionPreference";
import { themeColors } from "@/lib/theme";

function AccessibilityRuntime({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const prefersReducedMotion = useReducedMotionPreference();

  useEffect(() => {
    const mode = resolvedTheme === "light" ? "light" : "dark";
    const root = document.documentElement;
    const themeColor = themeColors[mode].background;
    let metaTags = Array.from(
      document.head.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    );

    if (metaTags.length === 0) {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.dataset.themeColor = "true";
      document.head.appendChild(meta);
      metaTags = [meta];
    }

    metaTags.forEach((meta) => {
      meta.content = themeColor;
    });
    root.dataset.reducedMotion = String(prefersReducedMotion === true);
  }, [prefersReducedMotion, resolvedTheme]);

  const reducedMotion: MotionConfigProps["reducedMotion"] =
    prefersReducedMotion === null
      ? "user"
      : prefersReducedMotion
        ? "always"
        : "never";

  return <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>;
}

export default function AccessibilityProvider({ children }: { children: ReactNode }) {
  return (
    <ReducedMotionProvider>
      <AccessibilityRuntime>{children}</AccessibilityRuntime>
    </ReducedMotionProvider>
  );
}
