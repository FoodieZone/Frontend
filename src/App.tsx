import { Fragment } from 'react';

import { Global } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import { reset } from './styles';

function App() {
	return (
		<Fragment>
			<Global styles={reset} />
			<Outlet />
		</Fragment>
	);
}

export default App;
