import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Prompt, Karla } from 'next/font/google';

// Prompt (semi-bold)
const prompt = Prompt({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-prompt',
});

// Karla (light)
const karla = Karla({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-karla',
});

export const metadata: Metadata = {
  title: "Salman Prottoy",
  description: "Software Engineer, Web Developer, and Open Source Contributor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.variable} ${karla.variable}`}>
        {children}
      <Analytics/>
      </body>
    </html>
  );
}
