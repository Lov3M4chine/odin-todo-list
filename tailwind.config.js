module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
    theme: {
      fontFamily: {
        swankyMooMoo: ['swankyMooMoo', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        patrickHand: ['patrickHand', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      extend: {
        backgroundImage: (theme) => ({
          'rough-diagonal': "url('../imgs/rough_diagonal.webp')",
          'denim': "url('../imgs/denim.webp')",
          'carbon-fibre': "url('../imgs/carbon_fibre.webp')",
          'tactile-noise': "url('../imgs/tactile_noise.webp')",
          'micro-carbon': "url('../imgs/micro_carbon.png')",
          'groove-paper': "url('../imgs/groovepaper.png')",
        }),
      },
    },
    plugins: [],
  };
  