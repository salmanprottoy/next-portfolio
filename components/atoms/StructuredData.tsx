import { Skills, contact } from "@/app/data/Data";

interface StructuredDataProps {
  type: "person" | "website" | "article";
  data?: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  type,
  data,
}) => {
  const getPersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Salman Hossan Prottoy",
    jobTitle: "Software Engineer & Sub-Lead",
    description:
      "Software Engineer & Technical Lead building cloud-native SaaS platforms and research-driven experiences from Bangladesh",
    url: "https://salmanprottoy.vercel.app",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`,
    sameAs: [
      "https://linkedin.com/in/salman-prottoy/",
      "https://github.com/salmanprottoy/",
      "https://twitter.com/salman_prottoy/",
      "https://fb.com/salman.prottoy1/",
    ],
    knowsAbout: Skills.map((skill) => skill.name),
    worksFor: {
      "@type": "Organization",
      name: "Brand Cloud Inc.",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
    },
    email: contact.email,
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer & Technical Lead",
      occupationLocation: {
        "@type": "Place",
        name: "Bangladesh",
      },
    },
  });

  const getWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Md. Salman Hossan Prottoy Portfolio",
    url: "https://salmanprottoy.vercel.app",
    description:
      "Software Engineer & Sub-Lead crafting cloud-native SaaS platforms, distributed systems, and research-backed user experiences",
    author: {
      "@type": "Person",
      name: "Md. Salman Hossan Prottoy",
    },
    publisher: {
      "@type": "Person",
      name: "Md. Salman Hossan Prottoy",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://salmanprottoy.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  });

  const getArticleSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      data?.title ||
      "Md. Salman Hossan Prottoy - Software Engineer & Web Developer",
    description:
      data?.description ||
      "Software Engineer & Sub-Lead building cloud-native SaaS platforms and research-driven experiences",
    image:
      data?.image ||
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`,
    author: {
      "@type": "Person",
      name: "Md. Salman Hossan Prottoy",
    },
    publisher: {
      "@type": "Person",
      name: "Md. Salman Hossan Prottoy",
    },
    datePublished: data?.datePublished || new Date().toISOString(),
    dateModified: data?.dateModified || new Date().toISOString(),
  });

  const getSchema = () => {
    switch (type) {
      case "person":
        return getPersonSchema();
      case "website":
        return getWebsiteSchema();
      case "article":
        return getArticleSchema();
      default:
        return getPersonSchema();
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema()),
      }}
    />
  );
};
