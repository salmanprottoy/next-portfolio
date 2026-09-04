import { MetadataRoute } from "next";
import { siteConfig } from "@/app/data/portfolio.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const now = new Date();
  const sections = [
    { id: "about", priority: 0.8 },
    { id: "experience", priority: 0.9 },
    { id: "projects", priority: 0.9 },
    { id: "education", priority: 0.7 },
    { id: "toolkit", priority: 0.8 },
    { id: "contact", priority: 0.8 },
  ];

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sections.map((section) => ({
      url: `${baseUrl}/#${section.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: section.priority,
    })),
  ];
}
