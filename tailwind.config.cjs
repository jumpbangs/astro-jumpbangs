/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      md: '640px',
    },
    extend: {},
  },
  daisyui: {
    themes: ['dark', 'light'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
