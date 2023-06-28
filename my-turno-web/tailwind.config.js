/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "780px",
      lg: "1000px",
      xl: "1200px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      principal: "#A442F1",
      secondary: "#CC6AFF",
      gray: {
        1: "#F5F5F5",
        2: "#F0F0F0",
        3: "#E1E1E1",
        6: "#8C8C8C",
      },
      tertiary: {
        1: "rgba(164, 66, 241, 0.1)",
        2: "rgba(164, 66, 241, 0.2)",
      },
      error: "#E53939",
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
