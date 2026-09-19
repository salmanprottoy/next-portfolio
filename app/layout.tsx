import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Instrument_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import AccessibilityProvider from "@/components/providers/AccessibilityProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/app/data/portfolio.config";
import { jsonLdSchema } from "@/app/data/schema";
import { themeColors } from "@/lib/theme";

const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
  ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
  : "/salman.jpg";

// Space Grotesk — display only 600/700 (headings) — one variable file would be larger, 2 weights cuts ~45KB
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-display",
});

// Instrument Sans — body 400 regular + 600 semibold — covers paragraphs + headings
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-body",
});

// JetBrains Mono — utility mono single weight 400 (labels/traces) — 5.7KB, swap to avoid FOIT
const jetMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  colorScheme: "dark light",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.metaDescription,
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    siteConfig.author,
    siteConfig.fullName,
    "AI Engineer",
    "Full-Stack Software Engineer",
    "Software Engineer",
    "RAG",
    "LLMs",
    "Vector Search",
    "LangChain",
    "CrewAI",
    "Multi-Agent Systems",
    "TensorFlow",
    "NLP",
    "TypeScript",
    "Python",
    "Go",
    "Java",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Django",
    "GraphQL",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "ChromaDB",
    "DynamoDB",
    "OpenSearch",
    "MySQL",
    "AWS Lambda",
    "AWS RDS",
    "AWS SQS",
    "Docker",
    "Applied AI",
    "Multi-objective optimization",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.defaultTitle,
    description: siteConfig.metaDescription,
    siteName: `${siteConfig.author} Portfolio`,
    images: [
      {
        url: profileImageUrl,
        width: 1200,
        height: 630,
        alt: `${siteConfig.author} — AI Engineer | Full-Stack Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.metaDescription,
    images: [profileImageUrl],
    creator: `@${siteConfig.twitterHandle}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ... (keep imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content={themeColors.dark.background} data-theme-color="true" />
        <link rel="preconnect" href="https://salmanprottoy-portfolio.s3.ap-south-1.amazonaws.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [{ where: { href_matches: "/*" }, eagerness: "moderate" }],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${spaceGrotesk.variable} ${instrumentSans.variable} ${jetMono.variable} font-sans`}>
        <ThemeProvider>
          <AccessibilityProvider>{children}</AccessibilityProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
