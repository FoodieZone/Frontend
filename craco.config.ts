import tsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
	plugins: [
		{
			plugin: {
				overrideWebpackConfig: ({ webpackConfig }: any) => {
					webpackConfig.resolve.plugins.push(new tsconfigPathsPlugin({}));
					return webpackConfig;
				},
			},
		},
	],
};
