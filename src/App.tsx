import { Fragment } from 'react';

import { Global } from '@emotion/react';

import { reset } from './styles';

function App() {
	return (
		<Fragment>
			<Global styles={reset} />
		</Fragment>
	);
}

export default App;
