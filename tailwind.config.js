// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // important
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E70FAA",
        secondary: "#00C0FD",
        darkBg: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
