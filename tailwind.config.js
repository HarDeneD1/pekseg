/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kemence: "#7A5230",
        kalasz: "#D9A441",
        hatter: "#F6F1E8",
      },
    },
  },
  plugins: [],
};
