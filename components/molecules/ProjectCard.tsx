import React from "react";
import Image from "next/image";
import cn from "@/app/utils/cn";

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string; // main project link (e.g., GitHub or live demo)
  links?: { label: string; url: string }[];
}

export default function ProjectCard({
  image,
  title,
  description,
  link,
  links,
}: ProjectCardProps) {
  const cardContent = (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden transition-all duration-300 flex items-center justify-center group cursor-pointer"
      )}
      style={{ minHeight: 420, maxWidth: 370 }}
    >
      {/* Project Image as background */}
      <Image
        src={image}
        alt={title}
        fill
        className={cn(
          "object-cover w-full h-full absolute inset-0 z-0",
          "brightness-75"
        )}
        priority={false}
      />
      {/* Overlay (on hover only) */}
      <div
        className={
          "absolute inset-0 flex flex-col items-center justify-end p-8 bg-black/60 rounded-3xl z-10 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
        }
      >
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-white mb-2 text-center">
            {title}
          </div>
          <div className="text-base text-white/90 mb-4 text-center">
            {description}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus:outline-none"
    >
      {cardContent}
    </a>
  );
}
