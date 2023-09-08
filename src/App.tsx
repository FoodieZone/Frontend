import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useIsWebView } from '~/hooks';

function App() {
	const isWebView = useIsWebView();
	const navigate = useNavigate();

	useEffect(() => {
		if (isWebView) {
			navigate('/start', { replace: true });
		} else {
			navigate('/splash', { replace: true });
		}
	}, [isWebView, navigate]);

	return null;
}

export default App;
