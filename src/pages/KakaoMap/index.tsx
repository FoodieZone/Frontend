/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
	interface Window {
		kakao: any;
	}
}

const { kakao } = window;

function KakaoMapPage() {
	console.log(kakao);
	return <div />;
}

export default KakaoMapPage;
