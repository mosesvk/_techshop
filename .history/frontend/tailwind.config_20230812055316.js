/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'lightBlue': '#145374',
      'darkBlue': '#00334E', 
      'dark': '#222831',
      'light': '#F4EEE8',
      'orange': '#EE6F57'
    }
  },
  plugins: [require('daisyui'), 'prettier-plugin-tailwindcss']

};
