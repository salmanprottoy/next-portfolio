import React from "react";
import cn from "@/app/utils/cn";
import { Text } from "../atoms/Text";
import { Flex } from "../atoms/Flex";

export interface WorkExperienceCardProps {
  jobTitle: string;
  company: string;
  date: string;
  bullets: string[];
  active?: boolean;
}

export function WorkExperienceCard({
  jobTitle,
  company,
  date,
  bullets,
  active = false,
}: WorkExperienceCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-10 min-w-[320px] max-w-xl transition-all duration-300",
        active
          ? "bg-secondary shadow-[0_8px_32px_0_theme('colors.light')/40] text-light"
          : " text-tertiary opacity-60"
      )}
    >
      <Flex direction="col" gap="5px" className="w-full">
        <Text
          text={jobTitle}
          className={cn(
            "text-3xl font-bold",
            active ? "text-light" : "text-tertiary"
          )}
        />
        <Text
          text={company}
          className={cn(
            "text-2xl font-medium pb-2.5",
            active ? "text-light" : "text-tertiary"
          )}
        />
        <Text
          text={date}
          className={cn(
            "text-base tracking-widest pb-2.5 uppercase",
            active ? "text-tertiary" : "text-tertiary/70"
          )}
        />
      </Flex>
      <ul className="space-y-3">
        {bullets.map((b, i) => (
          <li
            key={i}
            className={cn(
              "flex items-start text-base",
              active ? "text-light" : "text-tertiary/70"
            )}
          >
            <span className="mr-3 mt-1 text-lg">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
