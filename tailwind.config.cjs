const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
};

module.exports = config;
