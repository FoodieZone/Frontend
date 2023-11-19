import { useEffect, useState } from 'react';

import type { Coords } from '~/interfaces/map';

const useCoords = () => {
	const [coords, setCoords] = useState<Coords | null>(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				setCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude });
			});
		} else {
			return;
		}
	}, []);

	return coords;
};

export default useCoords;
