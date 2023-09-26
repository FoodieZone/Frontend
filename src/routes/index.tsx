import type { ReactNode } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import App from '~/App';
import { Home, LocationAgree, WorldCupPage, Start, WorldCupResult } from '~/pages';

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
		path: '/location-agree',
		element: <LocationAgree />,
	},
	{
		id: 'WorldCup',
		path: '/world-cup',
		element: <WorldCupPage />,
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
		path: '/world-cup/result',
		element: <WorldCupResult />,
	},
];

const router = createBrowserRouter(routeData.map((route) => ({ path: route.path, element: route.element })));

export default router;
