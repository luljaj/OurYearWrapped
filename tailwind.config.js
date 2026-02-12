/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'valentine-pink': '#FFB6C1',
        'soft-pink': '#FFC0CB',
        'light-pink': '#FFE4E1',
        'accent-pink': '#FF69B4',
        'deep-pink': '#FF1493',
        'dark-pink': '#C71585',
        cream: '#FFF5F7',
        'off-white': '#FFFAFA',
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 105, 180, 0.35)',
        glowStrong: '0 0 60px rgba(255, 20, 147, 0.45)',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.04)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.06)' },
        },
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1.6s ease-in-out infinite',
        floaty: 'floaty 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
