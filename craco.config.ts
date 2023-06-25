import tsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
	plugins: [
		{
			plugin: {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				overrideWebpackConfig: ({ webpackConfig }: any) => {
					webpackConfig.resolve.plugins.push(new tsconfigPathsPlugin({}));
					return webpackConfig;
				},
			},
		},
	],
};
