/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Explicitly mapping the luxury theme tokens
        'luxury-pitch': '#0A0A0A',  /* Pure deep obsidian black */
        'luxury-card': '#121212',   /* Slightly lighter obsidian for panels */
        'luxury-panel': '#171717',  /* Utility background accents */
        'luxury-dark': '#262626',   /* Sleek, muted structural borders */
        'luxury-gold': '#D4AF37',   /* Pure, rich 24K metallic gold */
      },
    },
  },
  plugins: [],
}