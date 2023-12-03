import foodios from '~/apis';

import type { Candidate } from '~/stores/candidate';

export const RoundsKey = {
	location: () => ['round', 'location'],
};

export const fetchRounds = async (longitude: null | number, latitude: null | number): Promise<Candidate[]> => {
	const {
		data: { foods },
	} = await foodios.get(`/restaurants/rounds/?lng=${longitude}&lat=${latitude}`);

	return foods;
};
