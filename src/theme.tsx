import type { Theme } from '@emotion/react';

declare module '@emotion/react' {
	interface GraySet {
		1: string;
		2: string;
		3: string;
		4: string;
		5: string;
		6: string;
	}

	export interface Theme {
		colors: {
			red: string;
			gray: GraySet;
		};
	}
}

const theme: Theme = {
	colors: {
		red: '#FF5E60',
		gray: { 1: '#292929', 2: '#333', 3: '#6B6B6B', 4: '#909090', 5: '#CCC', 6: '#E6E6E6' },
	},
};

export default theme;
