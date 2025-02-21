import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C4161C",
        secondary: "#2b2b2b",
        tertiary: "#0298da",
        lightBg: "#F8FAFC",
        textColor: "#54595f",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "120ch",
          },
        },
      },
      keyframes: {
        wiggle: {
          "35%": { transform: "rotate(17deg)" },
          "55%": { transform: "rotate(-17deg)" },
          "65%": { transform: "rotate(17deg)" },
          "75%": { transform: "rotate(-17deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite 1s",
      },
      aspectRatio: {
        "22 / 10": "22 / 10",
      },
      boxShadow: {
        stickyBtns: "0px 0px 1px 1px rgba(192, 192, 192, 0.3)",
      },
      transitionProperty: {
        width: "width",
        fadeIn: "visible opacity transform",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
};
export default config;
