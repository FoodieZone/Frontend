import { Global } from '@emotion/react';

import { reset } from './styles';

function App() {
	return (
		<>
			<Global styles={reset} />
		</>
	);
}

export default App;
