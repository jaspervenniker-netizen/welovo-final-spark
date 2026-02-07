/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#ff5f00',
          glow: '#ff8533',
        },
      },
      boxShadow: {
        'neon': '0 0 15px rgba(255, 95, 0, 0.5), 0 0 30px rgba(255, 95, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
