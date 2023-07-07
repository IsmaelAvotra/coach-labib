/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      rose: '#F29DAF',
      brown: '#443535',
      brownBlack: '#443535',
      white: '#ffffff',
      textColor: '#5E5E5E',
      black: '#020202',
    },
    fontSize: {
      link: ['16px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      textSize: ['20px', { lineHeight: '30px' }],
      textGras: ['28px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      textService: ['32px', { lineHeight: '38px', letterSpacing: '-0.03em' }],
      titleBanner: ['64px', { lineHeight: '72px', letterSpacing: '0.04em' }],
    },
    boxShadow: {
      image: '18px 12px 16px -7px rgba(0, 0, 0, 0.29)',
    },
    extend: {},
  },
  plugins: [],
}
