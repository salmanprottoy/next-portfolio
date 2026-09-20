import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useTypedAnswer from "./useTypedAnswer";

/**
 * Seam: useTypedAnswer — progressive text reveal for the retrieval trace.
 * Contract: the revealed text always converges to the latest text, and a
 * stale chain never survives a text change or an unmount.
 */
describe("useTypedAnswer — seam: progressive text reveal", () => {
  const TEXT = "Grounded answer with plenty of characters to reveal over time.";

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("reveals the text progressively and finishes with the full text", () => {
    const { result } = renderHook(() => useTypedAnswer(TEXT));
    expect(result.current.typed.length).toBeLessThan(TEXT.length);
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(result.current.typed).toBe(TEXT);
    expect(result.current.isTyping).toBe(false);
  });

  it("reports isTyping while the reveal is in progress", () => {
    const { result } = renderHook(() => useTypedAnswer(TEXT));
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current.isTyping).toBe(true);
  });

  it("shows the full text immediately when instant", () => {
    const { result } = renderHook(() =>
      useTypedAnswer(TEXT, { instant: true })
    );
    expect(result.current.typed).toBe(TEXT);
    expect(result.current.isTyping).toBe(false);
  });

  it("starts revealing only after the start delay", () => {
    const { result } = renderHook(() =>
      useTypedAnswer(TEXT, { startDelay: 1250 })
    );
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.typed).toBe("");
    act(() => {
      vi.advanceTimersByTime(400);
    });
    expect(result.current.typed.length).toBeGreaterThan(0);
  });

  it("discards the previous chain when the text changes mid-type", () => {
    const NEXT = "Second answer, completely different content.";
    const { result, rerender } = renderHook(
      ({ text }: { text: string }) => useTypedAnswer(text),
      { initialProps: { text: TEXT } }
    );

    // Let the first reveal get partway through.
    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(result.current.typed.length).toBeGreaterThan(0);

    rerender({ text: NEXT });
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    // No interleaving from the abandoned chain: the reveal is exactly the new text.
    expect(result.current.typed).toBe(NEXT);
    expect(result.current.isTyping).toBe(false);
  });

  it("stops cleanly when unmounted mid-type", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { unmount } = renderHook(() => useTypedAnswer(TEXT));
    act(() => {
      vi.advanceTimersByTime(300);
    });
    unmount();
    expect(() => {
      act(() => {
        vi.advanceTimersByTime(5000);
      });
    }).not.toThrow();
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});
