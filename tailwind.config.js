/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD93D",    // Vibrant yellow
        secondary: "#8B5CF6",  // Violet
        accent: "#FF8551",     // Orange accent
        neutral: "#FFFFFF",    // White
        dark: "#1A1A1A",       // Dark gray
        yellow: {
          light: "#FFE17B",
          DEFAULT: "#FFD93D",
          dark: "#FFC107",
        },
        violet: {
          light: "#A78BFA",
          DEFAULT: "#8B5CF6",
          dark: "#7C3AED",
        },
        grey: {
          light: "#F8F8F8",    // Softer white
          DEFAULT: "#4A4A4A",  // Medium grey
          dark: "#2A2A2A",     // Darker grey
          text: "#2D2D2D",     // Softer black for text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cooper: ['COOPBL', 'serif'],
        domine: ['var(--font-domine)', 'serif'],
      },
      backgroundImage: {
        'grain-pattern': "url('/grain.svg')",
        'grid-pattern': "url('/grid.svg')",
        'gradient-warm': 'linear-gradient(135deg, #FFD93D 0%, #FF4B4B 100%)',
        'gradient-poster': 'radial-gradient(circle at 30% 107%, #1A1A1A 0%, #2A2A2A 40%, #4A4A4A 100%), linear-gradient(180deg, rgba(26,26,26,0.8) 0%, rgba(74,74,74,0.4) 100%)',
        'noise-pattern': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        'spray-gradient': 'radial-gradient(circle at 50% 50%, rgba(74,74,74,0.3) 0%, rgba(26,26,26,0.1) 100%)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'drift': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(5px, 5px) rotate(2deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        'spin-reverse-slower': 'spin-reverse 35s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'drift': 'drift 10s ease-in-out infinite',
        'drift-slow': 'drift 15s ease-in-out infinite',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
} 