import type { ReactNode } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import App from '~/App';
import { Home, WorldCupPage, LocationAgree } from '~/pages';

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
		id: 'WorldCup',
		path: '/world-cup',
		element: <WorldCupPage />,
	},
	{
		id: 'Home',
		path: '/home',
		element: <Home />,
	},
];

const router = createBrowserRouter(routeData.map((route) => ({ path: route.path, element: route.element })));

export default router;
