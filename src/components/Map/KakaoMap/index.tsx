/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ForwardedRef } from 'react';
import { forwardRef, useEffect, useState } from 'react';

import { isEmpty } from 'lodash-es';
import { useRecoilValue } from 'recoil';

import { useGeoLocation } from '~/hooks';
import { isNotNull, makeCustomOverlay } from '~/utils';

import FoodieList, { swiperMock } from '../FoodieList';

import { locationState } from '~/stores/location';

interface KakaoMapProps {
	kakaoMap: any;
}

const KakaoMap = forwardRef(({ kakaoMap }: KakaoMapProps, ref: ForwardedRef<HTMLDivElement>) => {
	const { isLocating, isLocated } = useGeoLocation({ pending: false });

	const { latitude, longitude } = useRecoilValue(locationState);

	const [focusedItemIndex, setFocusedItemIndex] = useState<number>(0);
	const [customOverlayList, setCustomOverlayList] = useState<any[]>([]);
	const [currentLocationMarkerState, setCurrentLocationMarkerState] = useState<any>(null);

	const settingCurrentLocation = () => {
		const currentLocationMarker = new window.kakao.maps.Marker({
			position: new window.kakao.maps.LatLng(latitude, longitude),
		});

		setCurrentLocationMarkerState(currentLocationMarker);
		currentLocationMarker.setMap(kakaoMap);
	};

	// init current location marker
	useEffect(() => {
		if (!isLocated) {
			return;
		}

		settingCurrentLocation();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLocated]);

	// init foodielist marker
	useEffect(() => {
		setCustomOverlayList(
			swiperMock.map(
				(mock, index) =>
					new window.kakao.maps.CustomOverlay({
						kakaoMap,
						clickable: true,
						position: new window.kakao.maps.LatLng(mock.lat, mock.lng),
						content: makeCustomOverlay(mock, index === focusedItemIndex),
					})
			)
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [focusedItemIndex]);

	// setting foodieList marker
	useEffect(() => {
		if (isEmpty(customOverlayList)) {
			return;
		}

		customOverlayList.forEach((customOverlay) => customOverlay.setMap(kakaoMap));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [customOverlayList]);

	const handleChangeFocusedItemIndex = (index: number) => {
		customOverlayList.forEach((customOverlay) => customOverlay.setMap(null));
		setFocusedItemIndex(index);
	};

	const handleClickCurrentLocationButton = () => {
		if (isLocating) {
			return;
		}

		if (isNotNull(currentLocationMarkerState)) {
			currentLocationMarkerState.setMap(null);
		}

		settingCurrentLocation();

		const moveLatLng = new window.kakao.maps.LatLng(latitude, longitude);
		kakaoMap.panTo(moveLatLng);
	};

	return (
		<>
			<div ref={ref} />
			<FoodieList
				handleClickCurrentLocationButton={handleClickCurrentLocationButton}
				handleChangeFocusedItemIndex={handleChangeFocusedItemIndex}
			/>
		</>
	);
});

KakaoMap.displayName = 'KakaoMap';

export default KakaoMap;
