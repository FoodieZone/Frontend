/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

import useCoords from '~/hooks/useCoords';

declare global {
	interface Window {
		kakao: any;
	}
}

const { kakao } = window;

function KakaoMapPage() {
	const mapRef = useRef<HTMLDivElement>(null);

	const coords = useCoords();

	const [kakaoMap, setKakaoMap] = useState<any>(null);

	useEffect(() => {
		if (coords === null) {
			return;
		}

		const options = {
			center: new kakao.maps.LatLng(coords.latitude, coords.longitude),
			level: 4,
		};

		const map = new kakao.maps.Map(mapRef.current, options);

		setKakaoMap(map);
	}, [coords, mapRef]);

	useEffect(() => {
		if (kakaoMap === null) {
			return;
		}

		if (mapRef.current === null) {
			return;
		}

		const center = kakaoMap.getCenter();

		mapRef.current.style.width = '100%';
		mapRef.current.style.height = '100%';

		kakaoMap.relayout();
		kakaoMap.setCenter(center);
	}, [kakaoMap]);

	return <>{coords === null ? <div>loading...</div> : <div ref={mapRef} />}</>;
}

export default KakaoMapPage;
