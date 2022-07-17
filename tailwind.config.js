/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/layout/**/*.{ts,tsx}',
    './src/sections/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px', 'min': '1280px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px', min: '1024px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px', min: '768px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px', min: '640px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px', min: '577px' },
      // => @media (max-width: 639px) { ... }
      'th': { 'max': '576px' },
      // => @media (max-width: 576px) { ... }
    }
    ,
    extend: {
      gridTemplateColumns: {
        'header': '0.5fr 2fr 0.5fr',
        'books': '1fr 1fr 1fr 1fr',
      },
      fontSize: {
        '1.5xl': '1.375rem'
      },
      colors: {
        'phone-green': '#3ddc84',
        'mail': '#EA4335',
        'telegram': '#26A5E4',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      }
    },
  },
  plugins: [],
};
