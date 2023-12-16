import foodios from '~/apis';
import type { Restaurant } from '~/interfaces';

export const RestaurantsKey = {
	location: () => ['restaurant', 'location'],
};

export const fetchRestaurant = async (
	longitude: null | number,
	latitude: null | number,
	name: string
): Promise<Restaurant[]> => {
	const {
		data: { restaurants },
	} = await foodios.get(`/restaurants/results/?lng=${longitude}&lat=${latitude}&name=${name}`);

	return restaurants;
};
