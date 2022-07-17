/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/layout/**/*.{ts,tsx}',
    './src/sections/**/*.{ts,tsx}',
  ],
  theme: {
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
