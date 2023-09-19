import type { ReactNode } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import App from '~/App';
import { URL } from '~/constants';
import { Home, LocationAgree, Start, WorldCupResult, Splash } from '~/pages';

interface RouterBase {
	id: string;
	path: string;
	element: ReactNode;
}

const routeData: RouterBase[] = [
	{
		id: 'Main',
		path: URL.MAIN,
		element: <App />,
	},
	{
		id: 'LocationInformationAgree',
		path: URL.LOCATION_INFORMATION_AGREE,
		element: <LocationAgree />,
	},
	{
		id: 'Home',
		path: URL.HOME,
		element: <Home />,
	},
	{
		id: 'Start',
		path: URL.START,
		element: <Start />,
	},
	{
		id: 'WorldCupResult',
		path: URL.WORLD_CUP.RESULT,
		element: <WorldCupResult />,
	},
	{
		id: 'Splash',
		path: URL.SPLASH,
		element: <Splash />,
	},
];

const router = createBrowserRouter(routeData.map((route) => ({ path: route.path, element: route.element })));

export default router;
