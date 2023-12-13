const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		'./components/**/*.tsx',
		'./nextra-theme-docs/**/*.tsx',
		'./nextra-theme-docs/**/*.css',
		'./pages/**/*.md',
		'./pages/**/*.mdx',
		'./pages/**/*.tsx',
		'./pages/**/*.js',
		'./theme.config.js',
		'./styles.css',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [`"Inter"`, 'sans-serif'],
				mono: [
					'Menlo',
					'Monaco',
					'Lucida Console',
					'Liberation Mono',
					'DejaVu Sans Mono',
					'Bitstream Vera Sans Mono',
					'Courier New',
					'monospace',
				],
			},
			colors: {
				...colors,
				dark: '#000',
				gray: colors.neutral,
				blue: colors.blue,
				orange: colors.orange,
				green: colors.green,
				red: colors.red,
				yellow: colors.yellow,
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				betterhover: { raw: '(hover: hover)' },
			},
			keyframes: {
				slide: {
					'0%': { transform: 'translateX(0)' },
					'33.333%': { transform: 'translateX(-33.3333%)' },
					'66.666%': { transform: 'translateX(-66.6666%)' },
				},
			},
			animation: {
				slide: 'slide 100s ease-in-out infinite',
			},
		},
	},
	darkMode: 'class',
};
