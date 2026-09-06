export const themeColors = {
  light: {
    background: "#eef3f7",
    surface: "#fbfdff",
    foreground: "#182033",
    primary: "#087f96",
    accent: "#d94d2f",
  },
  dark: {
    background: "#0a0b16",
    surface: "#15172a",
    foreground: "#f0ebd4",
    primary: "#65e5eb",
    accent: "#ff754b",
  },
} as const;

export type ThemeMode = keyof typeof themeColors;
