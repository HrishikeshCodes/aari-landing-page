/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // AARI brand colors
        "aari-dark": {
          1: "#0f766e",
          2: "#065f46",
        },
        "aari-light": {
          1: "#f8fafc",
        },
        primary: {
          DEFAULT: "#0f766e",
          foreground: "#f8fafc",
        },
        secondary: {
          DEFAULT: "#065f46",
          foreground: "#f8fafc",
        },
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
        serif: ["Ramaraja", "serif"],
      },
    },
  },
  plugins: [],
};
