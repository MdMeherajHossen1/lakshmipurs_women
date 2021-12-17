const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        women_primary: "#002A3A",

      },
      fontFamily: {
        serif: ['Andada Pro', ...defaultTheme.fontFamily.serif],


      },
    },
  },
  plugins: [],
}
