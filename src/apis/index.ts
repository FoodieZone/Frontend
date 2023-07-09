import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import snakeCase from 'snakecase-keys';

const foodios = axios.create({
	baseURL: '/',
	timeout: 15000,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

foodios.interceptors.request.use(
	(config) => {
		if (config.data && !(config.data instanceof FormData)) {
			config.data = JSON.stringify(snakeCase(config.data, { deep: true }));
		}

		return config;
	},
	(error) => Promise.reject(error)
);

foodios.interceptors.response.use(
	(config) => {
		config.data = camelcaseKeys(config.data, { deep: true });

		return config;
	},
	(error) => error.response
);

export default foodios;
