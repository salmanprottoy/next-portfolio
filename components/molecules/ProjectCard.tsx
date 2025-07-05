import React from "react";
import Image from "next/image";
import cn from "@/app/utils/cn";

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  links?: { label: string; url: string }[];
  active?: boolean;
}

export function ProjectCard({
  image,
  title,
  description,
  links,
  active = false,
}: ProjectCardProps) {
  // Find GitHub link or use the first link as fallback
  const githubLink = links?.find(
    (link) =>
      link.label.toLowerCase().includes("github") ||
      link.url.toLowerCase().includes("github")
  );
  const mainLink =
    githubLink?.url || (links && links.length > 0 ? links[0].url : undefined);

  const cardContent = (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col items-center justify-start group cursor-pointer",
        active
          ? "shadow-[0_8px_32px_0_theme('colors.light')/40] bg-secondary opacity-60"
          : ""
      )}
      style={{ minHeight: 420, maxWidth: 370 }}
    >
      {/* Project Image */}
      <div className="w-full h-60 relative">
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            "object-cover rounded-3xl",
            active ? "brightness-100" : "brightness-75"
          )}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/60 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-full flex flex-col items-center justify-center pb-2">
            <div className="text-2xl font-bold text-white mb-2 text-center">
              {title}
            </div>
            <div className="text-base text-white/90">{description}</div>
          </div>
        </div>
      </div>
      {/* Links (optional, only for active, below image) */}
      {active && links && (
        <div className="flex flex-row gap-4 mt-4 mb-6 z-20">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-tertiary text-primary font-semibold hover:bg-primary hover:text-tertiary transition"
              onClick={(e) => e.stopPropagation()}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return mainLink ? (
    <a
      href={mainLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus:outline-none"
    >
      {cardContent}
    </a>
  ) : (
    cardContent
  );
}
