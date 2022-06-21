module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        BackgroundColor: '#DAFFF0',
        GreenColor: '#00985B',
        DarkGreen: '#00492C',
      },
      backgroundImage: {
        TemukanBackground: "url('./Img/Temukan.png')",
        KonsulBackground: "url('./Img/bg-konsul.png')",
      },
      lineHeight: {
        75: '75px',
        21: '21px',
      },
    },
  },
  plugins: [],
};
