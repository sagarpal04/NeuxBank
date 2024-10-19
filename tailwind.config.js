/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#CBD6CC",
        customOrangeDark: "#E3432B",
        customOrangeLight: "#E65640",
      },
      height: {
        "screen-75": "75vh",
      },
    },
  },
  plugins: [],
};
