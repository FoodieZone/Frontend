import { Global } from '@emotion/react';

import Layout from './components/Layout';
import { reset } from './styles';

function App() {
	return (
		<Layout>
			<Global styles={reset} />
		</Layout>
	);
}

export default App;
