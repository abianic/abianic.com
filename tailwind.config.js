// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['JetBrains Sans', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
        abianicGray: {
          50: '#f7f7fa',
          100: '#ededf2',
          200: '#d4d4dc',
          300: '#bcbcc7',
          400: '#9595a5',
          500: '#4c475b', // color base
          600: '#454050',
          700: '#373340',
          800: '#2a2731',
          900: '#1f1d25',
        },
        abianicWine: {
          50: '#fdf2f4',
          100: '#fde8eb',
          200: '#fbd1d5',
          300: '#f8a3aa',
          400: '#f3757f',
          500: '#9f435b', // color base
          600: '#8f3c52',
          700: '#7c3346',
          800: '#692a3a',
          900: '#57222f',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.abianicWine.900') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.abianicWine.900'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.abianicWine.500'),
              '&:hover': {
                color: `${theme('colors.abianicWine.400')}`,
              },
              code: { color: theme('colors.abianicWine.900') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
