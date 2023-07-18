/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      colors: {
        white: "#ffffff",
        black: "#000000",
        principal: "#A442F1",
        secondary: "#CC6AFF",
        gray: {
          1: "#F5F5F5",
          2: "#F0F0F0",
          3: "#E1E1E1",
          4: "#C8C8C8",
          5: "#AFAFAF",
          6: "#8C8C8C",
          7: "#6E6E6E",
          9: "#282828",
        },
        tertiary: {
          1: "rgba(164, 66, 241, 0.1)",
          2: "rgba(164, 66, 241, 0.2)",
        },
        error: "#E53939",
        success: "#00A541",
      },
    },
  },
  plugins: [],
};
