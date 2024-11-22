import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: {
          background: "var(--header-background)",
          foreground: "var(--header-foreground)",
          border: "var(--header-border)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
