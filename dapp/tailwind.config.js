/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        libuGreen: '#51FDED',
        libuDarkPurple: '#260259',
        libuBlue: '#0090C1',
        libuBlack: '#363732',
        libuWhite: '#FCF7F8',
        libuWhite2: '#DDDDDD',
        libuWhite3: '#575850',
      },
      height: {
        142: '42rem',
        140: '40rem',
        132: '36rem',
        128: '32rem',
        126: '30rem',
        111: '27rem',
        88: '22rem',
        17: '4.5rem',
        18: '5rem',
      },
      width: {
        128: '32rem',
        126: '30rem',
        111: '27rem',
        88: '22rem',
      },
      fontSize: {
        'card-title': '18px',
        'card-text': '12px',
      },
      fontFamily: {
        inter: ['Inter'],
        sora: ['Sora'],
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(-1.3rem)', opacity: '1' },
          '15%': { transform: 'translateY(-1.3rem)', opacity: '1' },
          '25%': { opacity: '0' },
          '40%': { opacity: '0' },
          '50%': { transform: 'translateY(-8rem)', opacity: '1' },
          '65%': { transform: 'translateY(-8rem)', opacity: '1' },
          '75%': { opacity: '0' },
          '85%': { opacity: '0' },
          '100%': { transform: 'translateY(-1.3rem)', opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 6s ease-in-out infinite',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
};
