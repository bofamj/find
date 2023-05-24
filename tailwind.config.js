/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-bg": "linear-gradient(252.28deg,#fdaf08,#da3642 51.04%,#1a0a47)",
        "dark-bg": "linear-gradient(252.28deg,#753da1,#421d5e 51.04%,#371d4c)",
      }),
    },
  },
  plugins: [],
};
