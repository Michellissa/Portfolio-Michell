/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        accent: "#4f46e5",
        "accent-light": "#6366f1",
        "bg-light": "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(15, 23, 42, 0.1)",
        "card-hover": "0 12px 32px -8px rgba(79, 70, 229, 0.25)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
