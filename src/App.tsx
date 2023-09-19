import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { URL } from '~/constants';
import { useIsWebView } from '~/hooks';

function App() {
	const isWebView = useIsWebView();
	const navigate = useNavigate();

	useEffect(() => {
		if (isWebView) {
			navigate(URL.START, { replace: true });
		} else {
			navigate(URL.SPLASH, { replace: true });
		}
	}, [isWebView, navigate]);

	return null;
}

export default App;
