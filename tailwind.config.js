/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.html'],

	theme: {
		extend: {
			fontFamily: {
				title: 'Josejin sans',
				text: 'Alata',
			},

			backgroundImage: {
				'hero-bg': "url('./images/hero-bg.jpg')",
			},
		},
	},
	plugins: [],
};
