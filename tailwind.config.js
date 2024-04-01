/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': ['12px', { lineHeight: '140%'}],
        'sm': ['14px', { lineHeight: '140%'}],
        'md': ['16px', { lineHeight: '140%'}],
        'lg': ['32px', { lineHeight: '140%'}],
        'xl': ['48px', { lineHeight: '120%'}],
        'hg': ['96px', { lineHeight: '100%'}],
      },
      container: {
        center: true,
        padding: '0.5rem',
        screens: {
          xl: '480px',
        },
      },
      fontWeight: {
        regular: '400',
        bold: '700',
        extrabold: '800',
      },
      colors: {
        'product': {
          'default': '#8FB2F5', 
        },
        'gray': {
          '950':'#1E1E29',
          '900': '#13131A',
          '800': '#16161F',
          '700': '#1C1C27',
          '600': '#22222F',
          '500': '#3B3B54',
          '400': '#7F7F98',
          '300': '#ABABC4',
          '200': '#BFBFD4',
          '100': '#FAFAFA',
          '50': '#FFFFFF', 
        },
       
      },
    },
  },
  plugins: [],
};
