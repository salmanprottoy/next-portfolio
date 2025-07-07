export { default as TypingEffect } from "./TypingEffect";
export { default as ProjectCard } from "./ProjectCard";
-export * from "./WorkExperienceCard";
+export { default as WorkExperienceCard } from "./WorkExperienceCard";
+// If you also need to expose the props interface:
+export type { WorkExperienceCardProps } from "./WorkExperienceCard";
