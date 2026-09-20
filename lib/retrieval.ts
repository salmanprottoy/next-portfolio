/**
 * Retrieval trace — seam for the hero's interactive demo.
 *
 * A tiny, deterministic keyword-retrieval engine over a local index of the
 * portfolio's real work. Every query gets a grounded answer or an explicit
 * "not in the index" fallback — never silence.
 */

export interface TraceDoc {
  id: string;
  label: string;
  keywords: string[];
  answer: string;
}

export interface TraceAnswer {
  answer: string;
  docIndices: number[];
  matched: boolean;
}

export const TRACE_DOCS: TraceDoc[] = [
  {
    id: "DOC·014",
    label: "Opin.fi / CS curricula",
    keywords: [
      "unipilot", "opin", "curricula", "study", "studying", "academic",
      "hackathon", "education", "finnish", "finland", "jyväskylä", "msc", "university",
    ],
    answer:
      "MSc Artificial Intelligence at the University of Jyväskylä (2025–2027). UniPilot — Aalto hackathon 2026 — turns Opin.fi curricula into AI study plans: Bedrock embeddings, DynamoDB + vector search, risk scoring.",
  },
  {
    id: "DOC·089",
    label: "Brand Cloud RAG corpus",
    keywords: [
      "rag", "retrieval", "llm", "llms", "embedding", "chroma", "chromadb",
      "vector", "document", "ingestion", "caching", "cache", "brand", "platform",
    ],
    answer:
      "Brand Cloud RAG platform: document ingestion → ChromaDB vector search → multi-LLM retrieval with Redis caching, Docker-based deployment. Built for production usage, not notebook demos.",
  },
  {
    id: "DOC·112",
    label: "Travel pipeline SQS logs",
    keywords: [
      "travel data", "travel", "sqs", "provider", "providers", "pipeline",
      "domains", "w3", "graphql", "api", "apis", "endpoint", "endpoints",
      "schema", "distributed", "go", "node",
    ],
    answer:
      "Travel data platform at W3 Engineers: unified 30+ provider domains into one schema via Amazon SQS async pipelines; built ~40% of the REST+GraphQL endpoints in Go and Node.js.",
  },
  {
    id: "DOC·203",
    label: "Forest agent JADE trace",
    keywords: [
      "agent", "agents", "jade", "crewai", "ollama", "forest", "fire",
      "coordination", "acl", "autonomous", "java",
    ],
    answer:
      "Forest fire management: JADE + CrewAI agents coordinate detection → monitoring → response via ACL messages and local Ollama LLMs. Each agent owns a role and escalates on threshold.",
  },
  {
    id: "DOC·041",
    label: "Bangla F1 93.1% study",
    keywords: [
      "bangla", "news", "fake", "f1", "smote", "research", "publication",
      "published", "springer", "nlp", "tensorflow", "thesis", "paper",
    ],
    answer:
      "Published research (Springer ICFIR 2021): Bangla fake-news detection on a 50K-instance skewed dataset — 93.1% F1 with SMOTE vs 67.6% baseline, 79.1% with stacked generalization.",
  },
  {
    id: "DOC·077",
    label: "AWS Lambda bed × beds",
    keywords: [
      "aws", "lambda", "cloud", "deploy", "deployment", "cicd", "devsecops",
      "nginx", "vercel", "docker", "infrastructure", "ci", "cd",
    ],
    answer:
      "Cloud stack: AWS Lambda, RDS and SQS, GitHub CI/CD with DevSecOps practices, Docker and Vercel deployments, Nginx in front of production services.",
  },
  {
    id: "DOC·156",
    label: "EFS migration notes",
    keywords: [
      "migration", "migrate", "migrations", "postgresql", "rds", "downtime",
      "efs", "cms", "cron", "database", "databases",
    ],
    answer:
      "Zero-downtime CMS migration to PostgreSQL on Amazon RDS; EFS-backed file access for faster data; cron pipelines parallelized for provider data loads.",
  },
  {
    id: "DOC·198",
    label: "ChromaDB HNSW graph",
    keywords: [
      "vector", "hnsw", "embedding", "embeddings", "cosine", "similarity",
      "index", "search", "768",
    ],
    answer:
      "Vector search: ChromaDB HNSW indexes over 768-d embeddings, cosine similarity — retrieval quality is gated before the LLM ever sees a prompt.",
  },
  {
    id: "DOC·063",
    label: "Vue monitoring 35%",
    keywords: [
      "vue", "frontend", "monitoring", "flask", "beego", "teaching",
      "assistant", "mentor", "mentoring", "junior",
    ],
    answer:
      "Earlier work: Vue.js components powering ~35% of an enterprise network-monitoring frontend; Flask/Beego REST APIs; teaching assistant for ~80 web-technology students; mentoring 2–3 juniors.",
  },
];

export const PRESET_QUERIES = [
  "How does RAG handle Finnish education data?",
  "Show multi-agent forest fire coordination",
  "Explain 40% travel API in Go",
] as const;

/** Curated demo answers for the three preset queries — kept verbatim from the published copy. */
const PRESET_ANSWERS: Record<(typeof PRESET_QUERIES)[number], string> = {
  [PRESET_QUERIES[0]]:
    "UniPilot ingests Opin.fi curricula → embeds with Bedrock → retrieves via DynamoDB + vector search → generates study plans with risk scoring. Vitest-tested, CloudFormation-deployed.",
  [PRESET_QUERIES[1]]:
    "JADE + CrewAI agents coordinate detection → monitoring → response via local Ollama. Each agent owns a role, shares via ACL messages, escalates on threshold.",
  [PRESET_QUERIES[2]]:
    "Migrated Django → Go, rebuilt REST+GraphQL endpoints (40% of 30+ domains), unified provider schemas via SQS + parallel cron pipelines, EFS for zero-downtime cutover.",
};

const FALLBACK_ANSWER =
  "I can't answer that — it's not in the index. Try asking about RAG, vector search, agents, migrations, AWS, research, or the study plans.";

const MAX_DOCS = 3;

function normalize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function scoreDoc(doc: TraceDoc, tokens: string[]): number {
  return doc.keywords.reduce((score, keyword) => {
    if (keyword.includes(" ")) {
      // Multi-word phrases are stronger signals than single-word hits.
      const words = keyword.split(" ");
      const allPresent = words.every((word) => tokens.includes(word));
      return allPresent ? score + 2 : score;
    }
    const hit = tokens.some(
      (token) => token === keyword || (keyword.length >= 4 && token.includes(keyword))
    );
    return hit ? score + 1 : score;
  }, 0);
}

export function answerQuery(query: string): TraceAnswer {
  const tokens = normalize(query);
  if (tokens.length === 0) {
    return { answer: FALLBACK_ANSWER, docIndices: [], matched: false };
  }

  const normalized = tokens.join(" ");
  const preset = PRESET_QUERIES.find(
    (q) => normalize(q).join(" ") === normalized
  );
  if (preset) {
    return {
      answer: PRESET_ANSWERS[preset],
      docIndices: rankedDocIndices(tokens),
      matched: true,
    };
  }

  const scores = TRACE_DOCS.map((doc) => scoreDoc(doc, tokens));
  const bestScore = Math.max(...scores);
  if (bestScore === 0) {
    return { answer: FALLBACK_ANSWER, docIndices: [], matched: false };
  }

  return {
    answer: TRACE_DOCS[scores.indexOf(bestScore)].answer,
    docIndices: rankedDocIndices(tokens),
    matched: true,
  };
}

function rankedDocIndices(tokens: string[]): number[] {
  return scoresToIndices(TRACE_DOCS.map((doc) => scoreDoc(doc, tokens))).slice(
    0,
    MAX_DOCS
  );
}

function scoresToIndices(scores: number[]): number[] {
  return scores
    .map((score, index) => ({ score, index }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .filter((entry) => entry.score > 0)
    .map((entry) => entry.index);
}
