// ═══════════════════════════════════════════════════════════════
//  PROJECTS — Edit this array to showcase your own work.
// ═══════════════════════════════════════════════════════════════

export type ProjectKind = "ai" | "platform" | "research" | "frontend";

export interface Project {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  kind: ProjectKind;
  metric?: string;
  metricLabel?: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export const Projects: Project[] = [
  {
    title: "RAG application",
    eyebrow: "Production AI · Brand Cloud",
    description:
      "A document intelligence workflow where users query multiple LLMs over uploaded content. The system combines retrieval, caching, and Docker-based services into a product that can handle real usage rather than just a notebook demo.",
    tags: ["RAG", "LLMs", "Vector search", "Docker"],
    kind: "ai",
    metric: "500+",
    metricLabel: "users",
    sourceUrl: "#",
  },
  {
    title: "CMS data migration",
    eyebrow: "Platform reliability · Brand Cloud",
    description:
      "Moved CMS content storage to PostgreSQL on Amazon RDS while keeping the product available. Backend services across the platform were integrated around the new source of truth without a disruptive cutover.",
    tags: ["PostgreSQL", "Amazon RDS", "TypeScript", "Zero downtime"],
    kind: "platform",
    metric: "0",
    metricLabel: "downtime",
    sourceUrl: "#",
  },
  {
    title: "Travel data platform",
    eyebrow: "Distributed systems · W3 Engineers",
    description:
      "Unified property data from multiple external providers into one schema, using parallel processing and Amazon SQS asynchronous messaging across a multi-tenant travel platform.",
    tags: ["Go", "Node.js", "REST", "GraphQL", "AWS SQS"],
    kind: "platform",
    metric: "30+",
    metricLabel: "domains",
    sourceUrl: "#",
  },
  {
    title: "Bangla fake-news detection",
    eyebrow: "Published research · IC4IR 2021",
    description:
      "Explored imbalance handling and model stacking for fake-news classification in Bangla, contributing to research published in Springer’s Lecture Notes in Networks and Systems.",
    tags: ["Python", "NLP", "TensorFlow", "Model stacking"],
    kind: "research",
    metric: "2022",
    metricLabel: "published",
    sourceUrl: "https://link.springer.com/chapter/10.1007/978-981-19-2445-3_51",
  },
];
