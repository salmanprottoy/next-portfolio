export const themeColors = {
  light: {
    background: "#E7ECEF",
    surface: "#F4F6F7",
    foreground: "#0F1E24",
    primary: "#0E6B5E",
    accent: "#FF4D1A",
  },
  dark: {
    background: "#0B1215",
    surface: "#141C1F",
    foreground: "#E7ECEF",
    primary: "#2DD4BF",
    accent: "#FF6B35",
  },
} as const;

export type ThemeMode = keyof typeof themeColors;
