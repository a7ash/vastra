/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD93D",    // Vibrant yellow
        secondary: "#FF4B4B",  // Bright red
        accent: "#FF8551",     // Orange accent
        neutral: "#FFFFFF",    // White
        dark: "#1A1A1A",       // Dark gray
        yellow: {
          light: "#FFE17B",
          DEFAULT: "#FFD93D",
          dark: "#FFC107",
        },
        red: {
          light: "#FF6B6B",
          DEFAULT: "#FF4B4B",
          dark: "#E63946",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cooper: ['Cooper Black', 'serif'],
      },
      backgroundImage: {
        'grain-pattern': "url('/grain.svg')",
        'gradient-warm': 'linear-gradient(135deg, #FFD93D 0%, #FF4B4B 100%)',
        'gradient-poster': 'radial-gradient(circle at 30% 107%, #FFD93D 0%, #FFB240 5%, #FF4B4B 45%, #FF8551 60%, #FFD93D 90%)',
      },
    },
  },
  plugins: [],
} 