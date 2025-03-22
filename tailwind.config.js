/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          lavender: '#ca6be5',
          navy: '#0e2675',
          emerald: '#008000'
        }
      },
    },  
    plugins: [],
  }