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
    title: "UniPilot — AI Academic Copilot",
    eyebrow: "Hackathon · Aalto University · 2026",
    description:
      "AWS-deployed AI academic copilot on Finnish Opin.fi education data. Implemented risk scoring, AI study plans, and sidebar chat with Vitest-tested React frontend and API Gateway + Lambda + Bedrock + DynamoDB backend via CloudFormation.",
    tags: ["TypeScript", "React", "AWS Lambda", "Bedrock", "DynamoDB", "CloudFormation"],
    kind: "ai",
    metric: "2026",
    metricLabel: "hackathon",
  },
  {
    title: "Forest Fire Management Multi-Agent System",
    eyebrow: "Multi-Agent Systems · 2026",
    description:
      "Coordinated autonomous agents for fire detection, monitoring, and response workflows using JADE, Java, Python, CrewAI, and Ollama — with agent-based communication and local LLM integration.",
    tags: ["JADE", "Java", "Python", "CrewAI", "Ollama", "Multi-Agent"],
    kind: "ai",
    metric: "JADE",
    metricLabel: "agents",
  },
  {
    title: "Production RAG platform",
    eyebrow: "Production AI · Brand Cloud",
    description:
      "Document ingestion, multi-LLM retrieval, vector search, caching, and Docker-based deployment. Users query multiple LLMs over uploaded documents — built to handle real usage, not just notebook demos.",
    tags: ["RAG", "LLMs", "Vector search", "Docker", "Redis", "Caching"],
    kind: "ai",
    metric: "Multi-LLM",
    metricLabel: "retrieval",
  },
  {
    title: "CMS data migration",
    eyebrow: "Platform reliability · Brand Cloud",
    description:
      "Moved CMS content storage to PostgreSQL on Amazon RDS with zero downtime, integrating backend services across the platform around the new source of truth.",
    tags: ["PostgreSQL", "Amazon RDS", "TypeScript", "Zero downtime"],
    kind: "platform",
    metric: "0",
    metricLabel: "downtime",
  },
  {
    title: "Travel data platform",
    eyebrow: "Distributed systems · W3 Engineers",
    description:
      "Unified property data from multiple external providers into one schema using parallel processing and Amazon SQS async messaging across a 30+ domain multi-tenant travel platform (≈40% of API endpoints).",
    tags: ["Go", "Node.js", "REST", "GraphQL", "AWS SQS", "EFS"],
    kind: "platform",
    metric: "30+",
    metricLabel: "domains",
  },
  {
    title: "Bangla Fake-News Detection",
    eyebrow: "Published research · Springer ICFIR 2021",
    description:
      "50K-instance BanFakeNews dataset (97% majority skew). 93.1% F1 with SMOTE vs 67.6% baseline; 79.1% with stacked generalization. Co-authored study on imbalance handling and model stacking with TensorFlow & NLP.",
    tags: ["Python", "NLP", "TensorFlow", "Model Stacking", "SMOTE"],
    kind: "research",
    metric: "93.1%",
    metricLabel: "F1 (SMOTE)",
    sourceUrl: "https://link.springer.com/chapter/10.1007/978-981-19-2445-3_51",
  },
];
