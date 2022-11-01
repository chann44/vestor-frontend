/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryDark": "#121212",
        "secondaryDark": "#191919",
        "thirdDark": "#1C1C1E",
        "forDark": "",
        "PrimaryBlue": "#5856D6",
        "purple": "#6739B7",
        "faddedBlue": "rgba(103, 57, 183, 0.1)",
        "faddedDark":"#1A1A1A",
        "text-faded": "#78778B",
        "text": "rgba(255, 255, 255, 0.87)",
        "red": "#E95065",
        "green": "#34C759"
      }
    },
  },
  plugins: [],
}