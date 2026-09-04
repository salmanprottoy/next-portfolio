// ═══════════════════════════════════════════════════════════════
//  SCHEMA.ORG JSON-LD — Re-built from portfolio.config.ts
// ═══════════════════════════════════════════════════════════════

import {
  siteConfig,
  socialMedia,
  schemaSkills,
  schemaCountryCode,
} from "./portfolio.config";

const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
  ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
  : "/salman.jpg";

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fullName,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.metaDescription,
  url: siteConfig.siteUrl,
  image: profileImageUrl,
  sameAs: socialMedia.map((social) => social.link),
  knowsAbout: schemaSkills,
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Jyväskylä",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "American International University-Bangladesh",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: schemaCountryCode,
  },
};
