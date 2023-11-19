/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ForwardedRef } from 'react';
import { forwardRef, useEffect } from 'react';

interface KakaoMapProps {
	kakaoMap: any;
}

const MOCKS = [
	{ id: 1, lat: 37.5416754, lng: 127.0703144 },
	{ id: 2, lat: 37.5414413, lng: 127.0687571 },
	{ id: 3, lat: 37.5413829, lng: 127.0658046 },
];

const KakaoMap = forwardRef(({ kakaoMap }: KakaoMapProps, ref: ForwardedRef<HTMLDivElement>) => {
	useEffect(() => {
		MOCKS.forEach((mock) => {
			const customOverlay = new window.kakao.maps.CustomOverlay({
				kakaoMap,
				clickable: true,
				position: new window.kakao.maps.LatLng(mock.lat, mock.lng),
				content: '<div>hihihi</div>',
			});

			customOverlay.setMap(kakaoMap);
		});
	}, [kakaoMap]);

	return <div ref={ref} />;
});

KakaoMap.displayName = 'KakaoMap';

export default KakaoMap;
