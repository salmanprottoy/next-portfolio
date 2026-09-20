import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import HeroSection from "@/components/sections/HeroSection";

/**
 * Seam: HeroSection's retrieval trace card — what a visitor sees when they
 * ask the trace a question.
 */
describe("hero retrieval trace — seam: ask the trace a question", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const renderTrace = () =>
    render(
      <HeroSection
        name="Md. Salman Hossan Prottoy"
        titleA="AI Engineer"
        titleB="Full-Stack Software Engineer"
        imageUrl="/salman-256.webp"
        imageAlt="Md. Salman Hossan Prottoy"
        contactEmail="salman.prottoy@gmail.com"
      />
    );

  const ask = (question: string) => {
    fireEvent.change(screen.getByLabelText(/ask the retrieval trace/i), {
      target: { value: question },
    });
    act(() => {
      vi.advanceTimersByTime(3000);
    });
  };

  it("answers a custom question with a grounded portfolio entry", () => {
    renderTrace();
    ask("what vector database does the RAG platform use?");
    expect(screen.getByText(/document ingestion → ChromaDB vector search/)).toBeInTheDocument();
  });

  it("shows an explicit fallback for out-of-domain questions instead of silence", () => {
    renderTrace();
    ask("what is your coffee order?");
    expect(screen.getByText(/can't answer|not in the index|try asking/i)).toBeInTheDocument();
  });
});
