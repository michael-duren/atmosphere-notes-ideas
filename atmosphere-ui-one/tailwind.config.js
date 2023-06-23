/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'black-texture': "url('/assets/img/black-texture.jpg')",
      },
      fontFamily: {
        title: ['Megrim', 'cursive'],
        caps: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
