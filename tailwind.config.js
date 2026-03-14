/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueVibrant: '#1d4ed8',
        'blueVibrant-light': '#60a5fa',
        'blueVibrant-dark': '#1e3a8a',
      },
      fontFamily: {
        sans: ['"Gill Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'h-xs': { raw: '(max-height: 670px)' },   // small phones / landscape
        'h-sm': { raw: '(max-height: 740px)' },   // small phones
        'h-md': { raw: '(max-height: 900px)' },   // most modern phones
        'h-lm': { raw: '(max-height: 1000px)' },  // most modern phones
        'h-lg': { raw: '(min-height: 1000px)' },  // tablets
        'h-xl': { raw: '(min-height: 1200px)' },  // large tablets / foldables
      },
      keyframes: {
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // height of bounce
        },
      },
      animation: {
        bounceCustom: 'bounceCustom 1s infinite', // 1s duration, infinite loop
      },
    },
  },
  safelist: [
    'animate-bounceCustom',
  ],
  plugins: [],
}
