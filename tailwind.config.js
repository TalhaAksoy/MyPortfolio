/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'JetBrainsMonoBold' : ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
}
