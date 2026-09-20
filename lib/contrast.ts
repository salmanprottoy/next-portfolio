/**
 * Pure WCAG contrast helpers. No dependencies — used by the design-token
 * spec to verify the theme meets AA contrast.
 */

/** hsl(h deg, s 0–1, l 0–1) → { r, g, b } each 0–255. */
export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hPrime = ((h % 360) + 360) % 360 / 60;
  const x = c * (1 - Math.abs((hPrime % 2) - 1));
  let rgb: [number, number, number];
  if (hPrime < 1) rgb = [c, x, 0];
  else if (hPrime < 2) rgb = [x, c, 0];
  else if (hPrime < 3) rgb = [0, c, x];
  else if (hPrime < 4) rgb = [0, x, c];
  else if (hPrime < 5) rgb = [x, 0, c];
  else rgb = [c, 0, x];
  const m = l - c / 2;
  return {
    r: Math.round((rgb[0] + m) * 255),
    g: Math.round((rgb[1] + m) * 255),
    b: Math.round((rgb[2] + m) * 255),
  };
}

/** WCAG relative luminance from sRGB channels 0–255. */
export function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }): number {
  const linear = (channel: number) => {
    const v = channel / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

/** WCAG contrast ratio (≥ 1, ≤ 21) between two sRGB colors. */
export function contrastRatio(a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const [lighter, darker] = la >= lb ? [la, lb] : [lb, la];
  return (lighter + 0.05) / (darker + 0.05);
}
