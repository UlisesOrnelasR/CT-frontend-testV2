/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01F0D0",
        secondary: "#D8FCF7",
        shadow: "#F6F7F8",
        text: "#072635",
        textSecondary: "#707070",
        respiratory: "#E0F3FA",
        temperatureR: "#FFE6E9",
        heart: "#FFE6F1",
        graph: "#F4F0FE"
      },
      borderRadius: {
        '41px': '41px',
        '70px': '70px',
        '24px': '24px',
        '16px': '16px',
      },
      height: {
        '1054': '1054px',
        '800': '800px',
        '673': '673px',
        '400': '400px',
        "349": "349px",
        "179": "179px"
      },
      maxHeight: {
        '1054': '1054px'
      },
    },
  },
  plugins: [],
};
