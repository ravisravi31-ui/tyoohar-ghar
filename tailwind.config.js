module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#7b0c0c',
        gold: '#cba852',
        cream: '#fff8f0',
        'deep-red': '#5a0b0b'
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
