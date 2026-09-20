import { describe, it, expect } from "vitest";
import { answerQuery, PRESET_QUERIES, TRACE_DOCS } from "./retrieval";

/**
 * Seam: `answerQuery` — the public interface of the hero's retrieval trace.
 * Ground truth for the preset answers is the copy already published on the site.
 */
describe("retrieval trace — seam: answerQuery over the local portfolio index", () => {
  it("answers each preset query with its known grounded answer", () => {
    expect(answerQuery(PRESET_QUERIES[0]).answer).toBe(
      "UniPilot ingests Opin.fi curricula → embeds with Bedrock → retrieves via DynamoDB + vector search → generates study plans with risk scoring. Vitest-tested, CloudFormation-deployed."
    );
    expect(answerQuery(PRESET_QUERIES[1]).answer).toBe(
      "JADE + CrewAI agents coordinate detection → monitoring → response via local Ollama. Each agent owns a role, shares via ACL messages, escalates on threshold."
    );
    expect(answerQuery(PRESET_QUERIES[2]).answer).toBe(
      "Migrated Django → Go, rebuilt REST+GraphQL endpoints (40% of 30+ domains), unified provider schemas via SQS + parallel cron pipelines, EFS for zero-downtime cutover."
    );
  });

  it("matches preset queries regardless of case or punctuation", () => {
    expect(answerQuery("HOW DOES RAG HANDLE FINNISH EDUCATION DATA?").answer).toBe(
      answerQuery(PRESET_QUERIES[0]).answer
    );
    expect(answerQuery("explain 40% travel api in go.").matched).toBe(true);
  });

  it("grounds custom questions in the matching portfolio entry", () => {
    const result = answerQuery("what vector database does the RAG platform use?");
    expect(result.matched).toBe(true);
    expect(result.answer).toContain("ChromaDB");
  });

  it("routes travel platform questions to the Go/SQS entry", () => {
    const result = answerQuery("tell me about the travel data platform");
    expect(result.matched).toBe(true);
    expect(result.answer).toContain("30+");
  });

  it("answers study questions with the Jyväskylä MSc entry", () => {
    const result = answerQuery("where are you studying?");
    expect(result.matched).toBe(true);
    expect(result.answer).toContain("Jyväskylä");
  });

  it("answers research questions with the published F1 numbers", () => {
    const result = answerQuery("did you publish any research?");
    expect(result.matched).toBe(true);
    expect(result.answer).toContain("93.1%");
  });

  it("returns a graceful, non-empty fallback for out-of-domain questions", () => {
    const result = answerQuery("what is your coffee order?");
    expect(result.matched).toBe(false);
    expect(result.answer.trim().length).toBeGreaterThan(20);
    expect(result.answer).toMatch(/can't answer|not in the index|try asking/i);
  });

  it("treats empty and whitespace queries as fallbacks, never silence", () => {
    expect(answerQuery("").matched).toBe(false);
    expect(answerQuery("   ").matched).toBe(false);
    expect(answerQuery("").answer.length).toBeGreaterThan(0);
  });

  it("always returns doc indices that exist in TRACE_DOCS", () => {
    const queries = [...PRESET_QUERIES, "bangla fake news research", "", "coffee order"];
    for (const q of queries) {
      for (const index of answerQuery(q).docIndices) {
        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThan(TRACE_DOCS.length);
      }
    }
  });

  it("retrieves at most 3 docs per query", () => {
    for (const q of [...PRESET_QUERIES, "rag vector cloud aws"]) {
      expect(answerQuery(q).docIndices.length).toBeLessThanOrEqual(3);
    }
  });

  it("cites the topically matching doc among the retrieved sources", () => {
    // UniPilot question → curricula doc (DOC·014) must be among the sources
    const education = answerQuery(PRESET_QUERIES[0]);
    expect(education.docIndices).toContain(
      TRACE_DOCS.findIndex((d) => d.id === "DOC·014")
    );
    // Multi-agent question → JADE trace doc (DOC·203)
    const agents = answerQuery(PRESET_QUERIES[1]);
    expect(agents.docIndices).toContain(
      TRACE_DOCS.findIndex((d) => d.id === "DOC·203")
    );
    // Travel question → SQS pipeline doc (DOC·112)
    const travel = answerQuery(PRESET_QUERIES[2]);
    expect(travel.docIndices).toContain(
      TRACE_DOCS.findIndex((d) => d.id === "DOC·112")
    );
  });

  it("exposes 9 labeled trace docs with stable ledger ids", () => {
    expect(TRACE_DOCS).toHaveLength(9);
    expect(TRACE_DOCS[0].id).toBe("DOC·014");
    expect(TRACE_DOCS.every((d) => d.label.length > 0)).toBe(true);
  });
});
