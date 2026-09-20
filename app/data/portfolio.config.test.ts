import { describe, it, expect } from "vitest";
import { impactStats, Experience, Educations, Skills } from "./portfolio.config";
import { Projects } from "./projects";

describe("portfolio data contract — seam: public exports from app/data/*", () => {
  it("impactStats leads with the hard, verifiable numbers", () => {
    expect(impactStats).toHaveLength(4);
    const values = impactStats.map((s) => s.value);
    // Independent ground truth: the published F1 result and the
    // zero-downtime / endpoint-share claims from the experience entries.
    expect(values).toContain("93.1%");
    expect(values).toContain("0");
    expect(values).toContain("40%");
    expect(values).toContain("4+");
    // Vague counts removed — the concrete numbers live in the ledger instead.
    expect(values).not.toContain("100+");
    expect(values).not.toContain("3+");
  });

  it("Projects has 6 entries and RAG card uses Multi-LLM not 500+", () => {
    expect(Projects).toHaveLength(6);
    const rag = Projects.find((p) => p.title === "Production RAG platform");
    expect(rag).toBeDefined();
    expect(rag!.metric).toBe("Multi-LLM");
    expect(rag!.metricLabel).toBe("retrieval");
    expect(rag!.metric).not.toBe("500+");
    // independent literal: tags contain RAG stack
    expect(rag!.tags).toEqual(expect.arrayContaining(["RAG", "LLMs", "Vector search"]));
  });

  it("Experience has 4 roles in chronological order Sep 2023—Jun 2026 first", () => {
    expect(Experience).toHaveLength(4);
    expect(Experience[0].date).toBe("Sep 2023 — Jun 2026");
    expect(Experience[0].company).toContain("Brand Cloud");
    expect(Experience[1].date).toBe("May 2022 — Aug 2023");
    expect(Experience[2].date).toBe("Nov 2021 — May 2022");
    expect(Experience[3].date).toBe("May 2021 — Aug 2021");
  });

  it("Skills expose AI/ML seam with Vector Search and Multi-Agent Systems", () => {
    const names = Skills.map((s) => s.name);
    expect(names).toEqual(expect.arrayContaining(["RAG", "Vector Search", "Multi-Agent Systems", "NLP"]));
    expect(names).not.toContain("RAG Pipelines"); // old name removed
  });
});
