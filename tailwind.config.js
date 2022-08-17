/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
        plugin(function({ addVariant }) {
            addVariant('focus-visible', '&:focus-visible')
        })
    ],
}