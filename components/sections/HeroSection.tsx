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

const DOCS = [
  { id: "DOC·014", label: "Opin.fi / CS curricula", chunk: "vector · 768d" },
  { id: "DOC·089", label: "Brand Cloud RAG corpus", chunk: "retrieved" },
  { id: "DOC·112", label: "Travel pipeline SQS logs", chunk: "vector · 768d" },
  { id: "DOC·203", label: "Forest agent JADE trace", chunk: "retrieved" },
  { id: "DOC·041", label: "Bangla F1 93.1% study", chunk: "retrieved" },
  { id: "DOC·077", label: "AWS Lambda bed × beds", chunk: "vector · 768d" },
  { id: "DOC·156", label: "EFS migration notes", chunk: "vector · 768d" },
  { id: "DOC·198", label: "ChromaDB HNSW graph", chunk: "vector · 768d" },
  { id: "DOC·063", label: "Vue monitoring 35%", chunk: "vector · 768d" },
];

const PRESET_QUERIES = [
  "How does RAG handle Finnish education data?",
  "Show multi-agent forest fire coordination",
  "Explain 40% travel API in Go",
];

const DEMO_ANSWERS: Record<string, string> = {
  "How does RAG handle Finnish education data?":
    "UniPilot ingests Opin.fi curricula → embeds with Bedrock → retrieves via DynamoDB + vector search → generates study plans with risk scoring. Vitest-tested, CloudFormation-deployed.",
  "Show multi-agent forest fire coordination":
    "JADE + CrewAI agents coordinate detection → monitoring → response via local Ollama. Each agent owns a role, shares via ACL messages, escalates on threshold.",
  "Explain 40% travel API in Go":
    "Migrated Django → Go, rebuilt REST+GraphQL endpoints (40% of 30+ domains), unified provider schemas via SQS + parallel cron pipelines, EFS for zero-downtime cutover.",
};

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
  const [query, setQuery] = useState(PRESET_QUERIES[0]);
  const [stage, setStage] = useState<"idle" | "embedding" | "retrieving" | "generating">("retrieving");
  const [activeDocs, setActiveDocs] = useState<number[]>([1, 3, 4]);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const prefersReducedMotion = useReducedMotionPreference();

  // cycle demo on mount + on query change
  useEffect(() => {
    const key = PRESET_QUERIES.includes(query) ? query : PRESET_QUERIES[0];
    const answer = DEMO_ANSWERS[key] ?? DEMO_ANSWERS[PRESET_QUERIES[0]];

    // choose docs per query (deterministic)
    const picks: Record<string, number[]> = {
      [PRESET_QUERIES[0]]: [1, 3, 4],
      [PRESET_QUERIES[1]]: [3, 1, 7],
      [PRESET_QUERIES[2]]: [2, 6, 0],
    };
    const nextDocs = picks[key] ?? [1, 3, 4];

    if (prefersReducedMotion) {
      setStage("idle");
      setActiveDocs(nextDocs);
      setTypedAnswer(answer);
      setIsTyping(false);
      return;
    }
    setStage("embedding");
    setTypedAnswer("");
    setIsTyping(true);
    const t1 = setTimeout(() => {
      setStage("retrieving");
      setActiveDocs(nextDocs);
    }, 650);
    const t2 = setTimeout(() => {
      setStage("generating");
    }, 1100);
    let idx = 0;
    const t3 = setTimeout(() => {
      const tick = () => {
        idx += 2;
        setTypedAnswer(answer.slice(0, idx));
        if (idx < answer.length) {
          setTimeout(tick, 14);
        } else {
          setIsTyping(false);
          setStage("idle");
        }
      };
      tick();
    }, 1250);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [query, prefersReducedMotion]);

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
        <p className="mt-3 max-w-[36rem] text-sm leading-relaxed text-muted-foreground/80">
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

        <div className="mt-6 flex items-center gap-3">
          <div className="hero-portrait-frame">
            <Image
              src={imageUrl.includes("s3") ? imageUrl : "/salman-256.webp"}
              alt={imageAlt}
              width={256}
              height={256}
              sizes="60px"
              className="h-full w-full object-cover"
              priority
              fetchPriority="high"
              decoding="sync"
            />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">Builder profile</p>
            <p className="font-display text-[13px] font-semibold tracking-[-0.01em] text-foreground" translate="no">
              {name} · human in the loop
            </p>
            <p className="font-mono text-[0.62rem] text-muted-foreground">Thesis: multi-objective optimization · JYU</p>
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
              {activeDocs.map((idx) => (
                <div key={DOCS[idx].id} className="border border-accent/25 bg-accent/5 px-1.5 py-1">
                  <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.06em] text-accent">{DOCS[idx].id}</p>
                  <p className="truncate font-mono text-[0.58rem] text-muted-foreground">{DOCS[idx].label}</p>
                </div>
              ))}
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
            This is the artifact — not a mock. RAG that earns its place.
          </p>
        </div>
      </div>
    </div>
  );
}
