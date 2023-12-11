import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
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
	effects_UNSTABLE: [persistAtom],
});
