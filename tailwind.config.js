/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'login-color': '#E5E5E5',
      },
      lineHeight: {
        '14': '14px',
        '44': '44px',
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('focus-visible', '&:focus-visible')
    })
  ],
}
