/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          light: '#F0F9FF',
          DEFAULT: '#E0F2FE',
          soft: '#BAE6FD',
          vibrant: '#38BDF8',
          deep: '#0284C7',
        },
        mint: {
          light: '#F0FDF4',
          DEFAULT: '#D1FAE5',
          soft: '#A7F3D0',
          vibrant: '#34D399',
          deep: '#059669',
        },
        sunshine: {
          light: '#FEFCE8',
          DEFAULT: '#FEF08A',
          soft: '#FDE047',
          vibrant: '#EAB308',
          deep: '#CA8A04',
        },
        coral: {
          light: '#FFF7ED',
          DEFAULT: '#FFEDD5',
          soft: '#FDBA74',
          vibrant: '#FB923C',
          deep: '#EA580C',
        },
        lavender: {
          light: '#F5F3FF',
          DEFAULT: '#EDE9FE',
          soft: '#DDD6FE',
          vibrant: '#A78BFA',
          deep: '#7C3AED',
        },
        pinky: {
          light: '#FDF2F8',
          DEFAULT: '#FCE7F3',
          soft: '#FBCFE8',
          vibrant: '#F472B6',
          deep: '#DB2777',
        },
        warm: {
          cream: '#FFFDF9',
          card: 'rgba(255, 255, 255, 0.85)',
        }
      },
      fontFamily: {
        heading: ['Fredoka', 'Quicksand', 'sans-serif'],
        body: ['Nunito', 'Inter', 'sans-serif'],
        storybook: ['Short Stack', 'Fredoka', 'cursive']
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'storybook': '3rem',
      },
      boxShadow: {
        'pastel': '0 20px 40px -15px rgba(167, 139, 250, 0.15)',
        'pastel-hover': '0 25px 50px -12px rgba(244, 114, 182, 0.25)',
        'float': '0 15px 35px -5px rgba(56, 189, 248, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        flutter: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(15px, -20px) rotate(10deg) scale(1.05)' },
          '50%': { transform: 'translate(30px, 5px) rotate(-8deg) scale(0.95)' },
          '75%': { transform: 'translate(10px, -15px) rotate(5deg) scale(1.02)' },
        },
        clouds: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        bloom: {
          '0%': { transform: 'scale(0.8) rotate(-10deg)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15) rotate(5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
        }
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-medium': 'floatSlow 4s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'flutter': 'flutter 7s ease-in-out infinite',
        'clouds-slow': 'clouds 45s linear infinite',
        'clouds-fast': 'clouds 30s linear infinite',
        'bloom': 'bloom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
      }
    },
  },
  plugins: [],
}
