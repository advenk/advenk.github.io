/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#111418',
        'dark-bg-alt': '#121416',
        'accent-bg': '#283039',
        'accent-bg-alt': '#2c3035',
        'primary-text': '#ffffff',
        'secondary-text': '#9caaba',
        'secondary-text-alt': '#a2abb3',
        'button-blue-bg': '#0c77f2',
        'button-light-bg': '#dce7f3',
        'button-light-text': '#121416',
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}