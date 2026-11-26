/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F1E4',
        ivory: '#FBF7EF',
        ink: '#32170F',
        choc: '#542C1D',
        deep: '#24130D',
        gold: '#C99A20',
        wheat: '#E6C982',
        muted: '#74675F',
        leaf: '#4F6B3A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '1400px' },
    },
  },
  plugins: [],
}
