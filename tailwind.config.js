/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#040816",
        panel: "#0d1528",
        line: "rgba(148, 163, 184, 0.2)",
        text: "#e2e8f0",
        muted: "#94a3b8",
        accent: "#38bdf8",
        brandIndigo: "#6366f1",
        brandViolet: "#8b5cf6"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Sora", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.18), 0 10px 38px rgba(4, 18, 40, 0.55)",
        card: "0 14px 44px rgba(2, 8, 20, 0.45)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 18% 12%, rgba(56, 189, 248, 0.16), transparent 44%), radial-gradient(circle at 78% 8%, rgba(99, 102, 241, 0.2), transparent 38%), radial-gradient(circle at 76% 74%, rgba(139, 92, 246, 0.14), transparent 36%)"
      }
    }
  },
  plugins: []
};
