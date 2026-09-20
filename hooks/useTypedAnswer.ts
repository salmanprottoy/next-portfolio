"use client";

import { useEffect, useState } from "react";

interface UseTypedAnswerOptions {
  /** Delay in ms before the reveal starts (e.g. while retrieval animates). */
  startDelay?: number;
  /** Skip the animation and show the full text immediately. */
  instant?: boolean;
}

/**
 * Reveals `text` progressively. Contract: the revealed text always converges
 * to the latest `text`; a stale reveal chain never survives a text change or
 * an unmount.
 */
export default function useTypedAnswer(
  text: string,
  { startDelay = 0, instant = false }: UseTypedAnswerOptions = {}
) {
  const [typed, setTyped] = useState(() => (instant ? text : ""));
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (instant) {
      setTyped(text);
      setIsTyping(false);
      return;
    }

    setTyped("");
    setIsTyping(true);

    let nextTick: ReturnType<typeof setTimeout> | null = null;
    let index = 0;

    const tick = () => {
      index += 2;
      setTyped(text.slice(0, index));
      if (index < text.length) {
        nextTick = setTimeout(tick, 14);
      } else {
        setIsTyping(false);
      }
    };

    const startTimer = setTimeout(tick, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (nextTick) clearTimeout(nextTick);
    };
  }, [text, instant, startDelay]);

  return { typed, isTyping };
}
