import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Md. Salman Hossan Prottoy",
  description:
    "The page you're looking for doesn't exist. Return to Md. Salman Hossan Prottoy's portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="portfolio-shell flex min-h-screen items-center justify-center px-4">
      <div className="text-center space-y-8">
        <h1 className="font-heading text-9xl font-bold text-primary text-glow">404</h1>
        
        <div className="space-y-4">
          <h2 className="text-balance text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            The page you&apos;re looking for doesn&apos;t exist. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="focus-ring command-button"
          >
            Go Back Home
          </Link>
          <Link
            href="/#experience"
            className="focus-ring ghost-button"
          >
            View Experience
          </Link>
        </div>
      </div>
    </main>
  );
}
