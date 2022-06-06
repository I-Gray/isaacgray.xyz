module.exports = {
	ScrollRevealConfig: (delay = 200, viewFactor = 0.25) => ({
		origin: 'top',
		distance: '20px',
		duration: 200,
		delay,
		rotate: { x: 0, y: 0, z: 0 },
		opacity: 0,
		scale: 1,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		mobile: true,
		reset: false,
		useDelay: 'always',
		viewFactor,
		viewOffset: { top: 200, right: 0, bottom: 0, left: 0 },
	  }),

	colours: {
		lightgrey: '#D2D2D2',
		lightblue: '#26C1E7',
	},
};
