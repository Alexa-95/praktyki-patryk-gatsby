/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/**/*.{js,jsx,ts,tsx,html}`,
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/section/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        mainDark: "#292F36",
        accent: "#12F7D6",
        accentLight: "#98FAEC",
        dark: "#1A1E23",
        gray: "#43454D",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        IBMPlex: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
}