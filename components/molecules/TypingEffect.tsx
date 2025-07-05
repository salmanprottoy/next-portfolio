"use client";
import { TypeAnimation } from "react-type-animation";

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
  return (
    <div className="flex justify-center items-center text-xl md:text-4xl font-bold">
      <TypeAnimation
        sequence={[...text.flatMap((t) => [t, 1000])]}
        speed={speed as any}
        repeat={Infinity}
        cursor={cursor}
      />
    </div>
  );
};

export default TypingEffect;
