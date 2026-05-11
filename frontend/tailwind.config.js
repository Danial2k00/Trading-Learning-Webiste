/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F7FA',
        secondary: '#EEF2F7',
        card: '#FFFFFF',
        primary: '#2563EB',
        accent: '#06B6D4',
        success: '#10B981',
        text: '#000000',
        subtext: '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
