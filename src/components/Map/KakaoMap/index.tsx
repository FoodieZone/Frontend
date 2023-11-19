/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ForwardedRef } from 'react';
import { forwardRef, useEffect } from 'react';

import { makeCustomOverlay } from '~/utils';

import { swiperMock } from '../FoodieList';

interface KakaoMapProps {
	kakaoMap: any;
}

const KakaoMap = forwardRef(({ kakaoMap }: KakaoMapProps, ref: ForwardedRef<HTMLDivElement>) => {
	useEffect(() => {
		swiperMock.forEach((mock) => {
			const customOverlay = new window.kakao.maps.CustomOverlay({
				kakaoMap,
				clickable: true,
				position: new window.kakao.maps.LatLng(mock.lat, mock.lng),
				content: makeCustomOverlay(mock),
			});

			customOverlay.setMap(kakaoMap);
		});
	}, [kakaoMap]);

	return <div ref={ref} />;
});

KakaoMap.displayName = 'KakaoMap';

export default KakaoMap;
