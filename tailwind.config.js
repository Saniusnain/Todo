/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
      animations: {
				'slide-open': 'slide-open 0.2s linear both',
				'slide-close': 'slide-close 0.2s linear both',
				'rotate-arrow-open': 'rotate-arrow-open 0.2s ease-in both',
				'rotate-arrow-close': 'rotate-arrow-close 0.2s ease-in both',
			},
			keyframes: {
				'slide-open': {
					'0%': {
						transform: 'translateY(-5px)',
					},
					'100%': {
						transform: 'translateY(0)',
					},
				},
				'slide-close': {
					'0%': {
						transform: 'translateY(0px)',
					},
					'100%': {
						transform: 'translateY(-9px)',
					},
				},
				'rotate-arrow-open': {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'30%': {
						transform: 'rotate(90deg)',
					},
					'60%': {
						transform: 'rotate(110deg)',
					},
					'100%': {
						transform: 'rotate(180deg)',
					},
				},
				'rotate-arrow-close': {
					'0%': {
						transform: 'rotate(180deg)',
					},
					'30%': {
						transform: 'rotate(250deg)',
					},
					'60%': {
						transform: 'rotate(310deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
			},
			fontFamily: {
				gilda: ['Gilda Display', 'serif'],
			},
		},
	},
	plugins: [],
};
