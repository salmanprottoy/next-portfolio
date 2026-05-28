import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Prompt, Karla } from "next/font/google";
import Script from "next/script";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/app/data/portfolio.config";
import { jsonLdSchema } from "@/app/data/schema";

const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
  ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
  : "/salman.jpg";

// Prompt (semi-bold)
const prompt = Prompt({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-prompt",
});

// Karla (light)
const karla = Karla({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-karla",
});

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
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "Open Source",
    "Remote Developer",
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
        alt: `${siteConfig.author} - Software Engineer`,
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            {/* Google Analytics */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${prompt.variable} ${karla.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
