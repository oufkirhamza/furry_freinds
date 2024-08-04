/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        'leftline': 'url("/src/assets/img/dashed_line.svg")',
        'rightline': 'url("/src/assets/img/rightdashedline.svg")',
      },
      colors: {
        primary: "#9990DA",
        alpha: "#5D4FC4"
      },
    },
  },
  plugins: [],
};
