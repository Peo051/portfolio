/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#060b16",
        panel: "#0d1424",
        line: "rgba(147, 197, 253, 0.16)",
        text: "#dbeafe",
        muted: "#93a4c5",
        accent: "#38bdf8",
        indigo: "#6366f1",
        violet: "#8b5cf6"
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
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
