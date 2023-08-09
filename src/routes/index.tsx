import type { ReactNode } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import App from '~/App';
import { HomePage, WorldCupPage } from '~/pages';

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
		id: 'Home',
		path: '/home',
		element: <HomePage />,
	},
	{
		id: 'WorldCup',
		path: '/world-cup',
		element: <WorldCupPage />,
	},
];

const router = createBrowserRouter(routeData.map((route) => ({ path: route.path, element: route.element })));

export default router;
