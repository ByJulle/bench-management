import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#F2F9FF",
          100: "#D9ECFF",
          200: "#A6D2FF",
          300: "#73B9FF",
          DEFAULT: "#499DF2",
          500: "#3D85CC",
          600: "#326CA6",
          700: "#224B73",
          800: "#1B3A59",
          900: "#0B1926",
        },
        secondary: {
          50: "#878787",
          100: "#F0F0F0",
          200: "#D6D6D6",
          300: "#BDBDBD",
          DEFAULT: "#A8A8A8",
          500: "#878787",
          600: "#666666",
          700: "#474747",
          800: "#2E2E2E",
          900: "#141414",
        },
        success: {
          50: "#EDFAF3",
          100: "#CEF2DD",
          200: "#55F296",
          300: "#55F296",
          DEFAULT: "#14CC61",
          500: "#11A64F",
          600: "#0D7F3D",
          700: "#0B7336",
          800: "#06401E",
          900: "#042612",
        },
        warning: {
          50: "#FFF9EB",
          100: "#FFEECC",
          200: "#F2D291",
          300: "#F2BE55",
          DEFAULT: "#F2A60C",
          500: "#CC8C0A",
          600: "#A67208",
          700: "#805706",
          800: "#593D04",
          900: "#261A02",
        },
        danger: {
          50: "#FFF3F3",
          100: "#FFE5E5",
          200: "#E59595",
          300: "#E55050",
          DEFAULT: "#E51728",
          500: "#BF1321",
          600: "#990F1B",
          700: "#730C14",
          800: "#4D080D",
          900: "#260407",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(primary|secondary|success|warning|danger)/
      }
  ]
};
export default config;
