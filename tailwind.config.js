/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "manhattan": "#f9ce9d",
        "martinique": "#3b3054",
        "shipGray": "#3a3843",
        "eggBlue": "#2acfcf",
      },
    },
  },
  plugins: [],
}
