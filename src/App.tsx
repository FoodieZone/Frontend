import { Link } from 'react-router-dom';

import { URL } from './constants';

function App() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Link to={URL.HOME}>HOME</Link>
			<Link to={URL.MAIN}>MAIN</Link>
			<Link to={URL.LOCATION_INFORMATION_AGREE}>LOCATION_INFORMATION_AGREE</Link>
			<Link to={URL.WORLD_CUP.RESULT}>WORLD_CUP.RESULT</Link>
		</div>
	);
}

export default App;
