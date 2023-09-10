import type { ReactNode } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import App from '~/App';
import { Home, LocationAgree, Start, WorldCupResult, Bridge } from '~/pages';

interface RouterBase {
	id: string;
	path: string;
	element: ReactNode;
}

const routeData: RouterBase[] = [
	{
		id: 'Main',
		path: '/',
		element: <App />,
	},
	{
		id: 'LocationInformationAgree',
		path: '/location_agree',
		element: <LocationAgree />,
	},
	{
		id: 'Home',
		path: '/home',
		element: <Home />,
	},
	{
		id: 'Start',
		path: '/start',
		element: <Start />,
	},
	{
		id: 'WorldCupResult',
		path: '/world_cup/result',
		element: <WorldCupResult />,
	},
	{
		id: 'Bridge',
		path: '/bridge',
		element: <Bridge />,
	},
];

const router = createBrowserRouter(routeData.map((route) => ({ path: route.path, element: route.element })));

export default router;
