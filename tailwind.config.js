/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01F0D0",
        secondary: "#D8FCF7",
        text: "#072635",
        textSecondary: "#707070"
      },
      borderRadius: {
        '41px': '41px',
        '70px': '70px',
      },
    },
  },
  plugins: [],
};
