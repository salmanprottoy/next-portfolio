export const themeColors = {
  light: {
    background: "#f1f7f4",
    surface: "#fbfdfb",
    foreground: "#12201e",
    primary: "#267f66",
    accent: "#ec8d18",
  },
  dark: {
    background: "#071113",
    surface: "#10282a",
    foreground: "#d8e5df",
    primary: "#67e8b0",
    accent: "#f3a65a",
  },
} as const;

export type ThemeMode = keyof typeof themeColors;
