import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Prompt, Karla } from "next/font/google";

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
    default: "Md. Salman Hossan Prottoy - Software Engineer & Web Developer",
    template: "%s | Md. Salman Hossan Prottoy",
  },
  description:
    "Software Engineer, Web Developer, and Open Source Contributor based in Bangladesh. Specialized in React, Node.js, Python, and full-stack development.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Md. Salman Hossan Prottoy",
    "Salman Prottoy",
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
    "Bangladesh",
    "Remote Developer",
  ],
  authors: [{ name: "Md. Salman Hossan Prottoy" }],
  creator: "Md. Salman Hossan Prottoy",
  publisher: "Md. Salman Hossan Prottoy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://salmanprottoy.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salmanprottoy.vercel.app",
    title: "Md. Salman Hossan Prottoy - Software Engineer & Web Developer",
    description:
      "Software Engineer, Web Developer, and Open Source Contributor based in Bangladesh. Specialized in React, Node.js, Python, and full-stack development.",
    siteName: "Md. Salman Hossan Prottoy Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`,
        width: 1200,
        height: 630,
        alt: "Md. Salman Hossan Prottoy - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Salman Hossan Prottoy - Software Engineer & Web Developer",
    description:
      "Software Engineer, Web Developer, and Open Source Contributor based in Bangladesh. Specialized in React, Node.js, Python, and full-stack development.",
    images: [`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`],
    creator: "@salman_prottoy",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md. Salman Hossan Prottoy",
              jobTitle: "Software Engineer",
              description:
                "Software Engineer, Web Developer, and Open Source Contributor",
              url: "https://salmanprottoy.vercel.app",
              image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`,
              sameAs: [
                "https://linkedin.com/in/salman-prottoy/",
                "https://github.com/salmanprottoy/",
                "https://twitter.com/salman_prottoy/",
                "https://fb.com/salman.prottoy1/",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "Django",
                "Next.js",
                "MongoDB",
                "PostgreSQL",
                "Docker",
                "Git",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Brand Cloud Inc.",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "BD",
              },
            }),
          }}
        />
      </head>
      <body className={`${prompt.variable} ${karla.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
