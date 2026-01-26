import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import SectionMotion from "./SectionMotion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen w-full py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden",
        className
      )}
    >
      <SectionMotion>{children}</SectionMotion>
    </section>
  );
}
