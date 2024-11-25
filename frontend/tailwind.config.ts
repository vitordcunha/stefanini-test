import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        card: {
          background: "var(--card-background)",
          foreground: "var(--card-foreground)",
        },
        input: {
          background: "var(--input-background)",
          focus: {
            border: "var(--input-focus-background)",
            foreground: "var(--input-focus-foreground)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
