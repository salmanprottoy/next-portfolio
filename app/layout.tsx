import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Prompt, Karla } from "next/font/google";
import AccessibilityProvider from "@/components/providers/AccessibilityProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/app/data/portfolio.config";
import { jsonLdSchema } from "@/app/data/schema";
import { themeColors } from "@/lib/theme";

const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
  ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
  : "/salman.jpg";

// Prompt provides the editorial display voice.
const prompt = Prompt({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-prompt",
});

// Karla keeps long-form content readable.
const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-karla",
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
    "Software Engineer",
    "AI Systems Builder",
    "Full Stack Developer",
    "React Developer",
    "Go Developer",
    "Python Developer",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "RAG",
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
        alt: `${siteConfig.author} — Software Engineer & AI Systems Builder`,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${prompt.variable} ${karla.variable} font-sans`}>
        <ThemeProvider>
          <AccessibilityProvider>{children}</AccessibilityProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
