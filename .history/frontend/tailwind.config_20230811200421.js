/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'blue': '#325288',
      'dark': '#222831',
      'light': '#F4EEE8',
      'darkGreen': '114E60'
    }
  },
  plugins: [require('daisyui')]
};
