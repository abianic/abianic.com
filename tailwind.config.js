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
        abianicLightBlue: {
          50: '#eefaff',
          100: '#dff6fe',
          200: '#c0ecfd',
          300: '#94dffb',
          400: '#5ecdf8',
          500: '#219ebc', // color base
          600: '#1d8eab',
          700: '#18768f',
          800: '#146074',
          900: '#114f60',
        },
        abianicOrange: {
          50: '#fff8eb',
          100: '#fff0d4',
          200: '#fedca0',
          300: '#fec06d',
          400: '#fca338',
          500: '#fb8500', // color base
          600: '#e27700',
          700: '#c06500',
          800: '#995000',
          900: '#7d4100',
        },
        abianicDarkBlue: {
          50: '#eefaff',
          100: '#dff6fe',
          200: '#c0ecfd',
          300: '#94dffb',
          400: '#5ecdf8',
          500: '#219ebc', // color base
          600: '#1d8eab',
          700: '#18768f',
          800: '#146074',
          900: '#114f60',
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
              code: { color: theme('colors.abianicOrange.900') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.abianicOrange.900'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.abianicOrange.500'),
              '&:hover': {
                color: `${theme('colors.abianicOrange.400')}`,
              },
              code: { color: theme('colors.abianicOrange.900') },
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
