const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		filename: 'js/[name.]bundle.[contenthash].js',
		path: path.resolve(__dirname, 'assets', 'scripts'),
		publicPath: 'dist'
	},
	devtool: 'none',
	plugins: [new CleanPlugin.CleanWebpackPlugin()],
	module: {
		test: /\.tsx?$/u,
		use: 'ts-loader',
		exclude: /node_modules/u
	},
	resolve: { extensions: ['.tsx', '.ts', '.js'] }
}