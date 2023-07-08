/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./public/*.{html,js,vue}",
    "./src/*.{html,js,vue}",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

