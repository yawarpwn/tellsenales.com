/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    screens: {
     'sm': '650px',
      // => @media (min-width: 640px) { ... }

      'md': '960px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    }, 
		extend: {
      colors: {
        primary: 'hsl(262 80% 50%)',
        'primary-dark': 'hsl(262 80% 40%)',
        secondary: 'hsl(316 70% 50%)',
        'secondary-dark': 'hsl(316 70% 40%)',
        success: 'hsl(158 65% 52%)',
        warning: 'hsl(43 96% 56%)',
        error: 'hsl(0 91% 71%)',
      }

    },
	},
	plugins: [],
}
