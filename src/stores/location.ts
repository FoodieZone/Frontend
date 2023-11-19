import { atom } from 'recoil';

interface Location {
	latitude: null | number;
	longitude: null | number;
}

export const locationState = atom<Location>({
	key: 'location',
	default: {
		latitude: null,
		longitude: null,
	},
});
