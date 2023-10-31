import type { ReactNode } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import App from '~/App';
import { URL } from '~/constants';
import { Home, LocationAgree, Start, WorldCupPage, WorldCupResult, Splash, Bridge, Recommend } from '~/pages';

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
		id: 'WorldCup',
		path: URL.WORLD_CUP.ROUND,
		element: <WorldCupPage />,
	},
	{
		id: 'WorldCupResult',
		path: URL.WORLD_CUP.RESULT,
		element: <WorldCupResult />,
	},
	{
		id: 'Bridge',
		path: URL.BRIDGE,
		element: <Bridge />,
	},
	{
		id: 'Splash',
		path: URL.SPLASH,
		element: <Splash />,
	},
	{
		id: 'Recommend',
		path: URL.RECOMMEND,
		element: <Recommend />,
	},
];

const router = createBrowserRouter(routeData.map((route) => ({ path: route.path, element: route.element })));

export default router;
