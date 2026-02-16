/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Navy Black (Text)
          light: '#334155',
          dark: '#020617',
        },
        secondary: {
          DEFAULT: '#B45309', // Deep Amber / Gold
          light: '#F59E0B',
          bg: '#FEF3C7',
        },
        accent: {
          green: '#16A34A', // WhatsApp Natural Green
          red: '#DC2626',
        },
        background: {
          DEFAULT: '#FAFAF9', // Warm Stone / Premium Paper
          dark: '#F5F5F4',    // Slightly darker stone
          paper: '#FFFFFF',
        },
        text: {
          primary: '#1C1917', // Warm Black
          secondary: '#57534E', // Warm Gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
