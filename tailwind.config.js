/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F8FAFC',     // Slate light background
          card: '#FFFFFF',      // Pure white card background
          border: '#E2E8F0',    // Light border color
          amber: '#D97706',     // Rich Warm Amber Primary
          amberLight: '#FEF3C7',
          amberDark: '#B45309',
          whatsapp: '#25D366',  // WhatsApp Green
          whatsappDark: '#128C7E',
          textDark: '#0F172A',  // Main text Slate 900
          textMuted: '#475569'  // Subtitle text Slate 600
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
