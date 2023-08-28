import { useState, useEffect } from 'react';

import { isUndefined } from 'lodash-es';
declare global {
	interface Window {
		AndroidWebViewBridge?: unknown;
		webkit?: {
			messageHandlers: {
				WebViewBridge?: unknown;
			};
		};
	}
}

function useIsWebView() {
	const [isWebView, setIsWebView] = useState<boolean>(false);

	useEffect(() => {
		const isWebViewUserAgent = /(WebView|AndroidWebView|iPhone|iPod|iPad)/i.test(navigator.userAgent);

		// Android에서 사용 가능한 브릿지 함수 확인
		const isAndroidWebView = !isUndefined(window.AndroidWebViewBridge);

		// iOS에서 사용 가능한 브릿지 함수 확인
		const isIOSWebView =
			!isUndefined(window.webkit) &&
			!isUndefined(window.webkit.messageHandlers) &&
			!isUndefined(window.webkit.messageHandlers.WebViewBridge);

		// Android 또는 iOS의 브릿지 함수 중 하나라도 정의되어 있다면 웹뷰로 간주
		const isWebViewWithBridge = isWebViewUserAgent || isAndroidWebView || isIOSWebView;

		setIsWebView(isWebViewWithBridge);
	}, []);

	return isWebView;
}

export default useIsWebView;
