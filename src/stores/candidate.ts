import { atom } from 'recoil';

export interface Candidate {
	image: string;
	name: string;
}

export const candidateState = atom<Candidate[]>({
	key: 'candidate',
	default: [],
});
