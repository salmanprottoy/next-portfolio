// ═══════════════════════════════════════════════════════════════
//  PROJECTS — Edit this array to showcase your own work.
//  Set liveUrl or sourceUrl to "#" or undefined to hide that link.
// ═══════════════════════════════════════════════════════════════

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const Projects: Project[] = [
  {
    title: "Forest Fire MAS — BDI Multi-Agent System",
    description:
      "Autonomous forest fire emergency response built with JADE (Java) and extended with a Python BDI layer using CrewAI and Ollama. Four agents cooperate across fire detection, severity assessment, resource coordination, and emergency dispatch — with multi-zone conflict resolution, uncertainty handling, and belief revision in cascading scenarios.",
    tags: ["Java", "JADE", "Python", "CrewAI", "Ollama", "Multi-Agent Systems", "BDI"],
    sourceUrl: "#",
  },
  {
    title: "UniPilot — AI Academic Copilot",
    description:
      "AI-powered academic workspace built on Finland's shared higher education data infrastructure (HEDS / Opin.fi). Features at-risk graduation scoring, AI study plan generation via AWS Bedrock, multi-turn AI readiness checks, conversational course assistance, and teacher tools for course descriptions.",
    tags: ["TypeScript", "React", "Vite", "AWS Lambda", "AWS Bedrock", "DynamoDB", "CloudFormation"],
    sourceUrl: "#",
  },
  {
    title: "RAG-MT & QA — Finnish Culture Knowledge Base",
    description:
      "Domain-specific retrieval-augmented generation for English-to-Finnish machine translation and question answering over a Finnish culture knowledge base. Evaluates baseline MT, naive RAG, and filtered context selection with BLEU, COMET, and entity novelty metrics. Achieves 95% QA accuracy.",
    tags: ["Python", "PyTorch", "Hugging Face", "RAG", "NMT", "MarianMT", "NLP"],
    sourceUrl: "#",
  },
  {
    title: "Fake News Detection (Bangla)",
    description:
      "A machine learning system for detecting fake news in Bangla language. Implements imbalance handling techniques and model stacking to improve classification accuracy on low-resource datasets.",
    tags: ["Python", "Pandas", "Scikit-learn", "NLP", "Machine Learning"],
    sourceUrl: "#",
  },
];
