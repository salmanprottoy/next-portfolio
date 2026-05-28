// ═══════════════════════════════════════════════════════════════
//  SCHEMA.ORG JSON-LD — Re-built from portfolio.config.ts
//  Edit app/data/portfolio.config.ts to customize.
// ═══════════════════════════════════════════════════════════════

import {
  siteConfig,
  socialMedia,
  schemaSkills,
  schemaEmployer,
  schemaCountryCode,
} from "./portfolio.config";

const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
  ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
  : "/salman.jpg";

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fullName,    jobTitle: siteConfig.jobTitle,
  description: siteConfig.metaDescription,
  url: siteConfig.siteUrl,
  image: profileImageUrl,
  sameAs: socialMedia.map((s) => s.link),
  knowsAbout: schemaSkills,
  worksFor: {
    "@type": "Organization",
    name: schemaEmployer.name,
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: schemaCountryCode,
  },
};
