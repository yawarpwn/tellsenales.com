/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '650px',
      // => @media (min-width: 640px) { ... }

      md: '50em',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px'
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        primary: 'hsl(262 80% 50%)',
        'primary-dark': 'hsl(262 80% 40%)',
        secondary: 'hsl(316 70% 50%)',
        'secondary-dark': 'hsl(316 70% 40%)',
        accent: colors.fuchsia
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
