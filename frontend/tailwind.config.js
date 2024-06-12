/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        45: "45deg",
        50: "50deg",
        60: "60deg",
        70: "70deg",
        75: "75deg",
        80: "80deg",
        90: "90deg",
        135: "135deg",
        180: "180deg",
        225: "225deg",
        270: "270deg",
        315: "315deg",
      },
    },
    fontFamily: {
      sans: ["IBM Plex Sans Arabic", "Poppins", "sans-serif"],
    },
    colors: {
      default: "#f3f3f3",
      primary: "#3f37aa",
      secondary: "#435CDE",
      danger: "#f56565",
      success: "#4dc47d",
      black: "#000",
      text: "#33199C",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
