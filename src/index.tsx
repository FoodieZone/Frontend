import React from 'react';

import { Global, ThemeProvider } from '@emotion/react';
import router from '@routes/index';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import reportWebVitals from './reportWebVitals';
import { reset } from './styles';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BaseLayout>
			<ThemeProvider theme={theme}>
				<Global styles={reset} />
				<RouterProvider router={router} />
			</ThemeProvider>
		</BaseLayout>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
