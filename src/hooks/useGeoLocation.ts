import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRecoilState } from 'recoil';

import { locationState } from '~/stores/location';

interface Props {
	pending: boolean;
}

function useGeoLocation({ pending = false }: Props) {
	const [location, setLocation] = useRecoilState(locationState);

	const [isLocating, setIsLocating] = useState(false);
	const [isLocated, setIsLocated] = useState(false);
	const [isFail, setIsFail] = useState(false);

	const options: PositionOptions = useMemo(
		() => ({
			enableHighAccuracy: true, // 더 높은 정확도 요구
			timeout: 10000, // 10초 타임아웃
			maximumAge: 30000, // 이미 받아온 값을 사용할 수 있는 시간
		}),
		[]
	);

	const success = (position: GeolocationPosition) => {
		const { coords } = position;

		setLocation({
			latitude: coords.latitude,
			longitude: coords.longitude,
		});

		setIsLocated(true);
		setIsLocating(false);
	};

	const error = () => {
		setIsFail(true);
		setIsLocating(false);
	};

	const geoLocating = useCallback(() => {
		if (!navigator.geolocation) {
			setIsFail(true);
		} else {
			setIsLocating(true);

			navigator.geolocation.getCurrentPosition(success, error, options);
		}
	}, [options]);

	useEffect(() => {
		if (!pending) {
			geoLocating();
		}
	}, [geoLocating, pending]);

	return {
		isFail,
		isLocated,
		isLocating,
		location,
		geoLocating,
	};
}

export default useGeoLocation;
