/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

import { isNull } from 'lodash';

import FullPageLoading from '~/components/shared/FullPageLoading';
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
		if (isNull(coords)) {
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
		if (isNull(kakaoMap)) {
			return;
		}

		if (isNull(mapRef.current)) {
			return;
		}

		const center = kakaoMap.getCenter();

		mapRef.current.style.width = '100%';
		mapRef.current.style.height = '100%';

		kakaoMap.relayout();
		kakaoMap.setCenter(center);
	}, [kakaoMap]);

	if (isNull(coords)) {
		return (
			<FullPageLoading>
				푸디존에서 맞춤형 맛집을
				<br />
				찾고있습니다! 조금만 기다려주세요🙏🏻
			</FullPageLoading>
		);
	}

	return <div ref={mapRef} />;
}

export default KakaoMapPage;
