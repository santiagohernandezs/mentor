/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        'big-phone': '390px',
        tablet: '768px'
      },
      colors: {
        'purple/primary': '#8848FF',
        'purple/secondary': '#d4bdff',
        'black/primary': '#232323',
        'white/primary': '#FCFCFC'
      }
    }
  },
  plugins: []
}
