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
      <Flex direction="column" gap="xs" className="w-full">
        <Text
          variant="heading-lg"
          weight="bold"
          color={active ? "default" : "tertiary"}
          className={active ? "text-light" : "text-tertiary"}
        >
          {jobTitle}
        </Text>
        <Text
          variant="heading-sm"
          weight="medium"
          color={active ? "default" : "tertiary"}
          className={cn("pb-2.5", active ? "text-light" : "text-tertiary")}
        >
          {company}
        </Text>
        <Text
          variant="caption"
          weight="medium"
          color={active ? "tertiary" : "muted"}
          className={cn(
            "tracking-widest pb-2.5 uppercase",
            active ? "text-tertiary" : "text-tertiary/70"
          )}
        >
          {date}
        </Text>
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
