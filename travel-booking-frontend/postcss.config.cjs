const tailwindcss = require('@tailwindcss/postcss');

module.exports = {
  plugins: [
    tailwindcss(),
    require('autoprefixer'),
  ],
}
// This file is used to configure PostCSS with Tailwind CSS and Autoprefixer.