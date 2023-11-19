/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

interface KakaoMapProps {
	kakaoMap: any;
}

const KakaoMap = forwardRef(({ kakaoMap }: KakaoMapProps, ref: ForwardedRef<HTMLDivElement>) => {
	console.log(kakaoMap);

	return <div ref={ref} />;
});

KakaoMap.displayName = 'KakaoMap';

export default KakaoMap;
