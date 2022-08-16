const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const mode = process.env.NODE_ENV;

const config = {
	plugins: [tailwindcss(), autoprefixer()],
};

module.exports = config;
