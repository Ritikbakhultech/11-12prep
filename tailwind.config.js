/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F9',
          100: '#D9E3F0',
          200: '#B0C4DF',
          300: '#81A0CB',
          400: '#527DB7',
          500: '#335E99',
          600: '#23467A',
          700: '#1B355D',
          800: '#142542',
          900: '#0C172A',
          950: '#070E1A',
        },
        brand: {
          purple: {
            50: '#F5F3FF',
            100: '#EDE9FE',
            200: '#DDD6FE',
            300: '#C4B5FD',
            400: '#A78BFA',
            500: '#8B5CF6',
            600: '#7C3AED',
            700: '#6D28D9',
            800: '#5B21B6',
            900: '#4C1D95',
          },
          accent: {
            DEFAULT: '#6366F1',
            hover: '#4F46E5',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)',
        'premium': '0 4px 20px -2px rgba(12, 23, 42, 0.06), 0 2px 6px -1px rgba(12, 23, 42, 0.04)',
        'glow': '0 8px 30px -4px rgba(99, 102, 241, 0.12)',
        'card-hover': '0 12px 32px -4px rgba(12, 23, 42, 0.08), 0 4px 12px -2px rgba(12, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}
