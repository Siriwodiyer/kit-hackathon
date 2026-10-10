/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00f3ff",
          purple: "#b026ff",
          pink: "#ff007f",
          green: "#39ff14",
          yellow: "#ffe600",
          red: "#ff0055"
        },
        cyber: {
          bg: "#050811",
          card: "#0d1322",
          border: "#1e293b"
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 243, 255, 0.4), 0 0 30px rgba(0, 243, 255, 0.15)',
        'neon-purple': '0 0 15px rgba(176, 38, 255, 0.4), 0 0 30px rgba(176, 38, 255, 0.15)',
        'neon-red': '0 0 15px rgba(255, 0, 85, 0.4), 0 0 30px rgba(255, 0, 85, 0.15)',
        'neon-green': '0 0 15px rgba(57, 255, 20, 0.4), 0 0 30px rgba(57, 255, 20, 0.15)',
      }
    },
  },
  plugins: [],
}
