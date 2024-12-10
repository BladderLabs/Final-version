/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary, #013220)',
        'bg-secondary': 'var(--color-bg-primary, #012218)',
        'accent-primary': 'var(--color-accent, #FF6700)',
        'accent-secondary': '#CBA135',
        'highlight': '#3D9BE9',
        'text-primary': 'var(--color-text-primary, #F2F2F2)',
        'text-secondary': 'var(--color-text-secondary, #B4B4B4)',
        'surface': 'var(--color-surface, #014028)'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Playfair Display', 'serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-section': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'hero-pattern': 'url("/patterns/hero-bg.svg")'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'attention-pulse': 'attention-pulse 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'attention-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}