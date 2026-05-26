/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        mainDark: "#292F36",
        accent: "#12F7D6",
        accentLight: "#98FAEC",
        dark: "#1A1E23",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        IBMPlex: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
}