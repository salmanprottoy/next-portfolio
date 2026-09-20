"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
} from "lucide-react";
import AccessibleIcon from "@/components/ui/AccessibleIcon";
import useReducedMotionPreference from "@/hooks/useReducedMotionPreference";
import useTypedAnswer from "@/hooks/useTypedAnswer";
import { answerQuery, PRESET_QUERIES, TRACE_DOCS } from "@/lib/retrieval";

interface HeroSectionProps {
  name: string;
  eyebrow?: string;
  titleA: string;
  titleB: string;
  intro?: string;
  location?: string;
  imageUrl: string;
  imageAlt: string;
  contactEmail: string;
  resumeUrl?: string;
  resumeText?: string;
  availabilityText?: string;
  ctaContactText?: string;
  ctaScrollText?: string;
}

const DOCS = TRACE_DOCS;

export default function HeroSection({
  name,
  eyebrow = "AI Engineer · Full-Stack Software Engineer",
  titleA,
  titleB,
  intro = "I turn messy product problems into reliable software — then make AI useful in the real world.",
  location = "Jyväskylä, Finland",
  imageUrl,
  imageAlt,
  contactEmail,
  resumeUrl = "/api/resume",
  resumeText = "Resume",
  availabilityText = "Open to AI & full-stack roles — Jun 2026",
  ctaContactText = "Let's talk",
  ctaScrollText = "Explore the work",
}: HeroSectionProps) {
  const [query, setQuery] = useState<string>(PRESET_QUERIES[0]);
  const [stage, setStage] = useState<"idle" | "embedding" | "retrieving" | "generating">("embedding");
  const [activeDocs, setActiveDocs] = useState<number[]>(() =>
    answerQuery(PRESET_QUERIES[0]).docIndices
  );
  const prefersReducedMotion = useReducedMotionPreference();

  const traceResult = answerQuery(query);
  const { typed: typedAnswer, isTyping } = useTypedAnswer(traceResult.answer, {
    startDelay: 1250,
    instant: prefersReducedMotion === true,
  });

  // cycle demo on mount + on query change
  useEffect(() => {
    if (prefersReducedMotion) {
      setStage("idle");
      setActiveDocs(traceResult.docIndices);
      return;
    }
    setStage("embedding");
    const t1 = setTimeout(() => {
      setStage("retrieving");
      setActiveDocs(traceResult.docIndices);
    }, 650);
    const t2 = setTimeout(() => {
      setStage("generating");
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [query, prefersReducedMotion, traceResult]);

  // settle the pipeline once the reveal finishes
  useEffect(() => {
    if (!isTyping && stage === "generating") {
      setStage("idle");
    }
  }, [isTyping, stage]);

  const nameParts = name.split(" ");
  const lastName = nameParts.pop() || name;
  const firstName = nameParts.join(" ");

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
      {/* LEFT — Thesis */}
      <div className="min-w-0">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <span className="section-kicker">{eyebrow}</span>
          <span className="hidden h-px w-12 bg-border sm:block" />
        </div>

        <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
          Field note // 62.24°N 25.75°E · JYU — MSc AI · Systems trace — retrieval → reasoning → shipping
        </p>

        <h1 className="font-display text-[clamp(2.9rem,7vw,5.8rem)] font-semibold leading-[0.86] tracking-[-0.032em] text-foreground">
          <span className="block">{firstName.toUpperCase()}</span>
          <span className="block text-primary">{lastName.toUpperCase()}</span>
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="title-chip border-primary/25 bg-primary/5 text-foreground">{titleA}</span>
          <span className="font-mono text-xs text-muted-foreground">/</span>
          <span className="title-chip title-chip-accent">{titleB}</span>
          <span className="ml-1 hidden font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground sm:inline">
            4+ yrs · production RAG · AWS · vector search
          </span>
        </div>

        <p className="mt-6 max-w-[36rem] text-[15px] leading-[1.75] text-muted-foreground md:text-[17px]">
          {intro}
        </p>
        <p className="mt-3 max-w-[36rem] text-sm leading-relaxed text-muted-foreground">
          I ship from backend architecture through to the interface. If the retrieval fails, the UI shouldn&apos;t lie — and if the migration is risky, it ships with zero downtime.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-border py-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <AccessibleIcon icon={MapPin} className="h-3.5 w-3.5 text-primary" />
            {location}
          </span>
          <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-35" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {availabilityText}
          </span>
        </div>

        <div className="mt-7 flex flex-wrap gap-2.5">
          <Link href={`mailto:${contactEmail}`} className="focus-ring command-button group">
            <AccessibleIcon icon={Mail} className="h-3.5 w-3.5" />
            {ctaContactText}
            <AccessibleIcon icon={ArrowUpRight} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link href={resumeUrl} target="_blank" rel="noopener noreferrer" className="focus-ring ghost-button">
            <AccessibleIcon icon={FileText} className="h-3.5 w-3.5 text-primary" />
            {resumeText}
          </Link>
          <a href="#projects" className="focus-ring text-button">
            {ctaScrollText}
            <AccessibleIcon icon={ArrowDown} className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 border border-border bg-card p-3">
          <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden border border-border bg-muted sm:h-[5.5rem] sm:w-[5.5rem]">
            <Image
              src={imageUrl.includes("s3") ? imageUrl : "/salman-256.webp"}
              alt={imageAlt}
              width={256}
              height={256}
              sizes="88px"
              className="h-full w-full object-cover object-top"
              priority
              fetchPriority="high"
              decoding="sync"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/50" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary">Builder profile</p>
            <p className="font-display text-[15px] font-semibold leading-tight tracking-[-0.015em] text-foreground sm:text-[16px]" translate="no">
              {name}
            </p>
            <p className="mt-1 font-mono text-[0.68rem] leading-relaxed text-muted-foreground">Jyväskylä, Finland · AI Engineer · human in the loop</p>
          </div>
        </div>
      </div>

      {/* RIGHT — Live Retrieval Trace (signature) */}
      <div className="relative mx-auto w-full max-w-[30rem] lg:mx-0 lg:ml-auto">
        {/* ledger sheet */}
        <div className="signal-card p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-border pb-3">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
              Live retrieval trace <span className="text-accent">●</span> interactive
            </span>
            <span className="status-chip border-primary/30 bg-primary/5 text-primary">
              {stage === "embedding" && "embedding…"}
              {stage === "retrieving" && "retrieving…"}
              {stage === "generating" && "generating…"}
              {stage === "idle" && "ready"}
            </span>
          </div>

          {/* query bar */}
          <label htmlFor="hero-query" className="sr-only">
            Ask the retrieval trace
          </label>
          <div className="relative">
            <input
              id="hero-query"
              name="q"
              type="search"
              autoComplete="off"
              spellCheck={false}
              inputMode="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const v = query.trim();
                  if (!v) setQuery(PRESET_QUERIES[0]);
                }
              }}
              placeholder="Ask about RAG, agents, or migrations…"
              className="retrieval-input pr-10"
              aria-label="Ask the retrieval trace"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
              ↩
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {PRESET_QUERIES.map((q) => (
              <button
                key={q}
                type="button"
                aria-pressed={query === q}
                onClick={() => setQuery(q)}
                className={`focus-ring border px-2 py-1 text-left font-mono text-[0.62rem] leading-tight transition-colors ${
                  query === q
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {q}
              </button>
            ))}
          </div>

          {/* pipeline rail */}
          <div className="mt-5">
            <div className="flex items-center justify-between font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
              <span>query</span>
              <span className="text-primary">embedding</span>
              <span>vector search</span>
              <span className="text-accent">LLM</span>
            </div>
            <div className="relative mt-2 h-[2px] bg-border">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-primary to-accent transition-all duration-700"
                style={{
                  width: stage === "embedding" ? "34%" : stage === "retrieving" ? "68%" : stage === "generating" || stage === "idle" ? "100%" : "0%",
                }}
              />
              <span
                className="trace-packet absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent"
                style={{
                  left:
                    stage === "embedding" ? "34%" : stage === "retrieving" ? "68%" : stage === "generating" || stage === "idle" ? "100%" : "0%",
                  transition: "left 0.7s ease",
                }}
              />
            </div>
            <div className="mt-1 flex justify-between">
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span className="h-1 w-1 rounded-full bg-accent" />
            </div>
          </div>

          {/* vector field */}
          <div className="mt-5 border border-border bg-background/60 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
                Vector field · 9 docs · cosine
              </span>
              <span className="font-mono text-[0.6rem] text-primary">{activeDocs.length} retrieved</span>
            </div>
            <div className="relative h-[88px] overflow-hidden border border-border/60 bg-card">
              {/* subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--foreground)/1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/1) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* dots in vector-like spread */}
              <div className="absolute inset-0 p-2">
                <div className="grid h-full grid-cols-3 place-items-center gap-1">
                  {DOCS.map((doc, i) => {
                    const isActive = activeDocs.includes(i);
                    const isDim = stage !== "idle" && stage !== "generating" && !isActive;
                    return (
                      <div key={doc.id} className="flex flex-col items-center gap-1">
                        <span
                          className={`doc-dot ${isActive ? "is-active" : isDim ? "is-dim" : ""}`}
                          title={doc.label}
                        />
                        <span
                          className={`font-mono text-[0.48rem] uppercase tracking-[0.08em] ${
                            isActive ? "text-accent" : "text-muted-foreground"
                          }`}
                        >
                          {doc.id}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* query embedding particle */}
              <div
                className="pointer-events-none absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-foreground"
                style={{
                  left: stage === "embedding" ? "18%" : stage === "retrieving" ? "52%" : "92%",
                  opacity: stage === "idle" ? 0 : 1,
                  transition: "left 0.7s ease, opacity 0.3s ease",
                  boxShadow: "0 0 10px hsl(var(--foreground)/0.45)",
                }}
              />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {activeDocs.length === 0 ? (
                <p className="col-span-3 border border-border bg-muted/20 px-1.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.06em] text-muted-foreground">
                  0 docs matched — no sources for this query
                </p>
              ) : (
                activeDocs.map((idx) => (
                <div key={DOCS[idx].id} className="border border-accent/25 bg-accent/5 px-1.5 py-1">
                  <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.06em] text-accent">{DOCS[idx].id}</p>
                  <p className="truncate font-mono text-[0.58rem] text-muted-foreground">{DOCS[idx].label}</p>
                </div>
              )))
              }
            </div>
          </div>

          {/* generated answer */}
          <div className="mt-4 border border-border bg-card p-3">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
                Generated · grounded in retrieved docs
              </span>
              {isTyping && <span className="ml-auto h-1 w-8 animate-pulse bg-accent/60" />}
            </div>
            <p className="min-h-[3.2rem] font-mono text-[0.78rem] leading-relaxed text-foreground/90">
              {typedAnswer}
              {isTyping && <span className="ml-0.5 inline-block h-3 w-[0.55em] translate-y-0.5 bg-accent animate-pulse" />}
            </p>
            <div className="mt-2 flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-muted-foreground">
              <span>Sources:</span>
              {activeDocs.map((i) => (
                <span key={i} className="border border-border bg-muted px-1 py-0.5 text-foreground">
                  {DOCS[i].id}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-3 text-center font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
            Grounded in a local index of this portfolio — ask your own question.
          </p>
        </div>
      </div>
    </div>
  );
}
