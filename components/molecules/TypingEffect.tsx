"use client";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string[];
  speed?: number;
  cursor?: boolean;
}

const TypingEffect = ({
  text,
  speed = 70,
  cursor = true,
}: TypingEffectProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Always render the same initial content on server and client
  return (
    <div className="flex justify-center items-center text-light text-xl md:text-4xl font-bold text-center">
      {isMounted ? (
        <TypeAnimation
          sequence={[...text.flatMap((t) => [t, 1000])]}
          speed={speed as any}
          repeat={Infinity}
          cursor={cursor}
        />
      ) : (
        <span className="text-light">{text[0] ?? "Software Engineer"}</span>
      )}
    </div>
  );
};

export default TypingEffect;
