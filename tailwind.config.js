/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFE5E5",    // Soft pink
        secondary: "#97DECE",  // Mint green
        accent: "#FF9494",     // Coral pink
        neutral: "#F9F9F9",    // Off white
        dark: "#2D2D2D",       // Soft black
        sage: "#E3F2C1",      // Sage green
        lavender: "#C9A7EB",  // Soft purple
        peach: "#FFB4B4",     // Peach
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cooper: ['Cooper Black', 'serif'],
      },
      backgroundImage: {
        'grain-pattern': "url('/grain.svg')",
        'gradient-pastel': 'linear-gradient(135deg, #FFE5E5 0%, #97DECE 100%)',
      },
    },
  },
  plugins: [],
} 