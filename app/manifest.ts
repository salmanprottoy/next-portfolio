import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
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
        src: "/images/salmanprottoy.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/images/salmanprottoy.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
    categories: ["business", "productivity"],
    lang: "en",
    dir: "ltr",
    orientation: "portrait",
    scope: "/",
  };
}
