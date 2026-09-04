import type { Metadata } from "next";
import { Shield, Mail } from "lucide-react";
import { siteConfig, contact } from "@/app/data/Data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.fullName}'s portfolio website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-4 pb-16 pt-28 md:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="glass-strong space-y-10 rounded-2xl p-8 md:p-12">
          <div className="space-y-3 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Shield className="h-6 w-6" aria-hidden="true" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {siteConfig.lastUpdated}
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="leading-relaxed text-muted-foreground">
              This Privacy Policy explains how personal data is collected, used, and protected
              when you visit <strong>{siteConfig.siteUrl.replace("https://", "")}</strong>{" "}
              (the “Site”). This policy is written to comply with the EU General Data
              Protection Regulation (GDPR) and applies to all visitors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">2. Data Controller</h2>
            <p className="leading-relaxed text-muted-foreground">
              The data controller for this Site is:
            </p>
            <div className="border-l-2 border-primary/30 pl-4 leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">{siteConfig.fullName}</p>
              <p>Email: {contact.email}</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">3. What Data We Collect</h2>
            <p className="leading-relaxed text-muted-foreground">
              This Site does not operate a custom visitor tracker and does not independently
              collect or store IP addresses, browser user-agents, geolocation data, or
              resume-download records. The Site uses Vercel Analytics for aggregate page-view
              insights and may receive standard technical request data from its hosting provider
              for delivery and security purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">4. Purpose and Legal Basis</h2>
            <p className="leading-relaxed text-muted-foreground">
              Standard technical data processed by the hosting provider is used to deliver,
              secure, and maintain the Site. Vercel Analytics provides aggregate traffic insights
              without a custom visitor profile. Processing is based on legitimate interest under
              Art. 6(1)(f) GDPR. The Site does not use advertising or remarketing services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
            <p className="leading-relaxed text-muted-foreground">
              The Site uses the following services:
            </p>
            <ul className="list-inside list-disc space-y-2 leading-relaxed text-muted-foreground">
              <li>
                <strong>Vercel Analytics</strong> — provides aggregate page-view insights for
                understanding how the Site is used. See the{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Vercel Analytics Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Vercel</strong> — the Site is hosted on Vercel, which may process
                standard server request data such as IP addresses and user-agent information
                for hosting, reliability, and security purposes. See the{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Vercel Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">6. Cookies</h2>
            <p className="leading-relaxed text-muted-foreground">
              This Site does not intentionally set advertising cookies. Vercel Analytics is
              designed to provide aggregate insights without relying on cookies. Essential
              cookies may be used by the application where needed for basic functionality, such
              as remembering a display preference.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">7. Data Retention</h2>
            <p className="leading-relaxed text-muted-foreground">
              The Site does not retain separate visitor profiles, IP/geolocation records, or
              resume-download notifications. Hosting-related request data is retained according
              to the hosting provider’s policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">8. Your Rights</h2>
            <p className="leading-relaxed text-muted-foreground">
              Under GDPR, you have the right to:
            </p>
            <ul className="list-inside list-disc space-y-2 leading-relaxed text-muted-foreground">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request erasure of your data (“right to be forgotten”)</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              To exercise any of these rights, please contact me using the details below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">9. International Transfers</h2>
            <p className="leading-relaxed text-muted-foreground">
              Vercel Analytics and hosting services may process data outside the EEA. Please
              refer to the linked Vercel privacy policies for information about applicable
              safeguards and international transfers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">10. Changes to This Policy</h2>
            <p className="leading-relaxed text-muted-foreground">
              This Privacy Policy may be updated from time to time. Any changes will be posted
              on this page with an updated “Last updated” date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">11. Contact</h2>
            <p className="leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy or how your data is handled,
              please get in touch:
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contact.email}
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
