/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'tiltneon':['"Tilt Neon"', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

