import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { contrastRatio, hslToRgb } from "@/lib/contrast";

/**
 * Seam: the design tokens in app/globals.css are the public interface of the
 * theme. Every token pair used as text must meet WCAG AA (4.5:1) in both
 * themes — opacity variants like /60 count against this and must not exist
 * on text colors.
 */

const css = readFileSync(join(process.cwd(), "app", "globals.css"), "utf8");

function blockFor(selector: ":root" | ".dark"): string {
  const start = css.indexOf(`${selector} {`);
  const end = css.indexOf("}", start);
  if (start === -1 || end === -1) throw new Error(`block ${selector} not found`);
  return css.slice(start, end);
}

function token(block: string, name: string): { r: number; g: number; b: number } {
  const match = block.match(
    new RegExp(`--${name}:\\s*(-?[\\d.]+)\\s+([\\d.]+)%\\s+([\\d.]+)%`)
  );
  if (!match) throw new Error(`token --${name} not found in block`);
  return hslToRgb(Number(match[1]), Number(match[2]) / 100, Number(match[3]) / 100);
}

const AA = 4.5;

describe("design tokens — seam: text token pairs meet WCAG AA in both themes", () => {
  for (const [themeName, selector] of [
    ["light", ":root"],
    ["dark", ".dark"],
  ] as const) {
    const block = blockFor(selector);

    it(`${themeName}: foreground on background ≥ 4.5`, () => {
      expect(contrastRatio(token(block, "foreground"), token(block, "background"))).toBeGreaterThanOrEqual(AA);
    });

    it(`${themeName}: muted-foreground on background ≥ 4.5`, () => {
      expect(contrastRatio(token(block, "muted-foreground"), token(block, "background"))).toBeGreaterThanOrEqual(AA);
    });

    it(`${themeName}: muted-foreground on card ≥ 4.5`, () => {
      expect(contrastRatio(token(block, "muted-foreground"), token(block, "card"))).toBeGreaterThanOrEqual(AA);
    });

    it(`${themeName}: card-foreground on card ≥ 4.5`, () => {
      expect(contrastRatio(token(block, "card-foreground"), token(block, "card"))).toBeGreaterThanOrEqual(AA);
    });

    it(`${themeName}: primary-foreground on primary (buttons) ≥ 4.5`, () => {
      expect(contrastRatio(token(block, "primary-foreground"), token(block, "primary"))).toBeGreaterThanOrEqual(AA);
    });

    it(`${themeName}: accent as text on background (chips, kickers, labels) ≥ 4.5`, () => {
      expect(contrastRatio(token(block, "accent"), token(block, "background"))).toBeGreaterThanOrEqual(AA);
    });

    it(`${themeName}: primary as text on background (kickers, links) ≥ 4.5`, () => {
      expect(contrastRatio(token(block, "primary"), token(block, "background"))).toBeGreaterThanOrEqual(AA);
    });
  }
});
