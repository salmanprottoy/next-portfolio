import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
    ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
    : "/favicon.svg";
  const profileImageType = process.env.NEXT_PUBLIC_S3_BASE_URL
    ? "image/jpeg"
    : "image/svg+xml";
  const profileImageSizes = process.env.NEXT_PUBLIC_S3_BASE_URL
    ? ["192x192", "512x512"]
    : ["any", "any"];

  return {
    name: "Salman Prottoy - Software Engineer & Web Developer",
    short_name: "Salman Prottoy",
    description:
      "Software Engineer, Web Developer, and Open Source Contributor based in Bangladesh",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f23",
    theme_color: "#64ffda",
    icons: [
      {
        src: profileImageUrl,
        sizes: profileImageSizes[0],
        type: profileImageType,
      },
      {
        src: profileImageUrl,
        sizes: profileImageSizes[1],
        type: profileImageType,
      },
    ],
    categories: ["business", "productivity"],
    lang: "en",
    dir: "ltr",
    orientation: "portrait",
    scope: "/",
  };
}
