import { MetadataRoute } from "next";
import { siteConfig } from "@/app/data/portfolio.config";
import { themeColors } from "@/lib/theme";

export default function manifest(): MetadataRoute.Manifest {
  const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
    ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
    : "/salman.jpg";

  return {
    name: `${siteConfig.fullName} — Software Engineer & AI Systems Builder`,
    short_name: "Salman Prottoy",
    description: siteConfig.metaDescription,
    start_url: "/",
    display: "standalone",
    background_color: themeColors.dark.background,
    theme_color: themeColors.dark.primary,
    icons: [
      { src: profileImageUrl, sizes: "192x192", type: "image/jpeg" },
      { src: profileImageUrl, sizes: "512x512", type: "image/jpeg" },
    ],
    categories: ["business", "productivity"],
    lang: "en",
    dir: "ltr",
    orientation: "portrait",
    scope: "/",
  };
}
