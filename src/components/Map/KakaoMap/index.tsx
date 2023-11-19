/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ForwardedRef } from 'react';
import { forwardRef, useEffect, useState } from 'react';

import { isEmpty } from 'lodash';

import { useGeoLocation } from '~/hooks';
import { makeCustomOverlay } from '~/utils';

import FoodieList, { swiperMock } from '../FoodieList';

interface KakaoMapProps {
	kakaoMap: any;
}

const KakaoMap = forwardRef(({ kakaoMap }: KakaoMapProps, ref: ForwardedRef<HTMLDivElement>) => {
	const { latitude, longitude, isLocating } = useGeoLocation({ pending: false });

	const [focusedItemIndex, setFocusedItemIndex] = useState<number>(0);
	const [customOverlayList, setCustomOverlayList] = useState<any[]>([]);

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
