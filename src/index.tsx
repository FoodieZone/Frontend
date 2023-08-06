import React from 'react';

import { Global } from '@emotion/react';
import router from '@routes/index';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';
import { reset } from './styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Layout>
			<Global styles={reset} />
			<RouterProvider router={router} />
		</Layout>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
