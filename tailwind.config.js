/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "740px",
      laptop: "1400px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "red",
    },
    extend: {},
  },
  plugins: [],
};
