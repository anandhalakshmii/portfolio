/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'border-dash': {
          '0%': { 'stroke-dashoffset': 0 },
          '100%': { 'stroke-dashoffset': -1000 },
        },
        'border-pulse': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.1)' },
        },
        'border-gradient': {
          '0%, 100%': { 'border-color': 'transparent', 'background-position': '0% 50%' },
          '50%': { 'border-color': 'transparent', 'background-position': '100% 50%' },
        },
      },
      animation: {
        'border-spin': 'border-spin 3s linear infinite',
        'border-dash': 'border-dash 5s linear infinite',
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
        'border-gradient': 'border-gradient 3s ease infinite',
      },
    },
  },
  plugins: [],
};