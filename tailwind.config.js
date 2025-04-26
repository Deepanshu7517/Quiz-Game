/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["poppins", "sans-serif"],
        "cinzel": ["cinzel"]
      },
      backgroundImage: {
        'quiz-bg': "url('./src/public/background.png')",
      },
    },
  },
  plugins: [],
}