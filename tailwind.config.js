/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F10',
        secondary: '#1B1C1F',
        accent: '#4F8CFF',
        text: '#E9EAEC',
        'accent-light': '#6BA3FF',
        'accent-dark': '#3A7BFF',
        'cyber-blue': '#00D4FF',
        'neon-green': '#39FF14',
        'terminal-green': '#00FF41',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(79, 140, 255, 0.3)',
        'neon-strong': '0 0 30px rgba(79, 140, 255, 0.5)',
        'cyber': '0 0 25px rgba(0, 212, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
