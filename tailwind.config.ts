import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(243, 85%, 63%)', // A vibrant blue/purple
          'hover': 'hsl(243, 80%, 58%)',
          'light': 'hsl(243, 90%, 96%)',
        },
        secondary: {
          DEFAULT: 'hsl(210, 40%, 96%)', // A light gray
        },
        dark: {
          DEFAULT: 'hsl(228, 39%, 23%)', // Dark blue/gray for text
          'light': 'hsl(227, 12%, 61%)', // Lighter text color
        },
        light: {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
