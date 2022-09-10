/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: "#dc143c",
          secondary: "#a6a6a6",
        },
      },
    },
  },
  plugins: [],
};
