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
        'appBackground': "url('./src/assets/background.png')",
      },
    },
  },
  plugins: [],
}