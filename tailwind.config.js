/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#ff5722', // naranja vívido
          dark: '#e64a19',
          light: '#ff8a65',
        },
        flame: {
          DEFAULT: '#ff3d00', // rojo-naranja caliente
          hot: '#ff0066',     // magenta incandescente
        },
        electric: {
          DEFAULT: '#00e5ff', // cian eléctrico — contraste tech
          soft: '#22d3ee',
        },
        coal: {
          950: '#000000', // negro puro (clave: frío, no cálido)
          900: '#0a0a0a',
          800: '#151515',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}