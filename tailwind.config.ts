import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#292929",
        secondary: "#4d4d4d",
        tertiary: "#898989",
        white: "#ffffff",
      },
      fontFamily: {
        prompt: ["var(--font-prompt)", ...fontFamily.sans],
        karla: ["var(--font-karla)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
