"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-muted-foreground max-w-md">
          An unexpected error has occurred. Please try again or contact support if the issue persists.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-full bg-primary px-6 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}