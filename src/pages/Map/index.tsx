/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { isNull } from 'lodash';
import { useRecoilValue } from 'recoil';

import { FullPageLoading } from '~/components';
import { useGeoLocation } from '~/hooks';

import { FoodieList, KakaoMap } from '~/components/Map';
import { locationState } from '~/stores/location';

declare global {
	interface Window {
		kakao: any;
	}
}

const { kakao } = window;

function MapPage() {
	const mapRef = useRef<HTMLDivElement>(null);

	const { latitude, longitude } = useRecoilValue(locationState);
	const [kakaoMap, setKakaoMap] = useState<any>(null);
	const { isLocating } = useGeoLocation({ pending: false });

	useEffect(() => {
		if (isLocating) {
			return;
		}

		const options = {
			center: new kakao.maps.LatLng(latitude, longitude),
			level: 4,
		};

		const map = new kakao.maps.Map(mapRef.current, options);

		setKakaoMap(map);
	}, [isLocating, latitude, longitude, mapRef]);

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
	}, [kakaoMap, mapRef]);

	useEffect(() => {
		if (isNull(kakaoMap)) {
			return;
		}

		const currentPositionMarker = new window.kakao.maps.Marker({
			position: new window.kakao.maps.LatLng(latitude, longitude),
		});
		currentPositionMarker.setMap(kakaoMap);
	}, [kakaoMap, latitude, longitude]);

	if (isLocating) {
		return (
			<FullPageLoading>
				푸디존에서 맞춤형 맛집을
				<br />
				찾고있습니다! 조금만 기다려주세요🙏🏻
			</FullPageLoading>
		);
	}

	return (
		<Container>
			<KakaoMap kakaoMap={kakaoMap} ref={mapRef} />

			<FoodieList />
		</Container>
	);
}

export default MapPage;

const Container = styled.div`
	width: 100%;
	height: 100%;
`;
