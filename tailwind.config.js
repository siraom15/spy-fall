const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s',
        'fade-out': '1 0.5s ease-in-out',
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        anton: ['Anton', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
