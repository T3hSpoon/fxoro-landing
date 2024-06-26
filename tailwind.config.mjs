/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': '#ffffff',
			'black': '#000000',
			'yellow': {
			  500: '#ffb10a',
			},
			'orange': {
				600: '#ef5a28',
				700: '#c2410c',
				800: '#9a3412'
			},
			'sky': {
			  600: '#1b75ba'
			},
			'indigo': {
			  900: '#273773'
			},
			'neutral': {
				900: '#181818',
			},
	  
		  },

		  fontFamily: {
			sans: ['Montserrat', 'Graphik', 'sans-serif'],
      		serif: ['Merriweather', 'serif'],
		  },
		  fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.25rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.25rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
			'5xl': ['3rem', { lineHeight: '1' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }],
		  },
		  fontWeight: {
			thin: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		  },
		extend: {
			backgroundImage: {
				'hero-image': "url('/assets/hero.png')"
			}
		},
	},
	plugins: [],
}
