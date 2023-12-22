import React from 'react';

import { Global, ThemeProvider } from '@emotion/react';
import router from '@routes/index';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import BaseLayout from './components/BaseLayout';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { reset } from './styles';
import theme from './theme';

serviceWorkerRegistration.register();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BaseLayout>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={false} />
					<RecoilRoot>
						<Global styles={reset} />
						<RouterProvider router={router} />
					</RecoilRoot>
				</QueryClientProvider>
			</ThemeProvider>
		</BaseLayout>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
