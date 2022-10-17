/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        foreground: "#d1d3dc",
        background: "#0d0d13",
        borders: "#14141d",
      },
      secodary: {
        red: "#EC6546",
        orange: "#febe49",
        green: "#87bb2f",
        teal: "#14b3a6",
        blue: "#1d95e9",
        indigo: "#5f5cff",
        purple: "#a843ff",
        plum: "#c537b5",
      },
    },
    fontSize: {
      xs: ["12px", "15px"],
      sm: ["14px", "17.5px"],
      base: ["16px", "20px"],
      lg: ["18px", "25px"],
      xl: ["22px", "30px"],
      "2xl": ["26px", "40px"],
      "3xl": ["32px", "50px"],
      "4xl": ["40px", "60px"],
      "5xl": ["48px", "72px"],
    },
    fontWeight: {
      bold: 600,
      semi: 500,
      normal: 400,
      light: 300,
    },
    fontFamily: {
      display: ["Inter", "sans-serif"],
      monoscape: ["monoscape"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
