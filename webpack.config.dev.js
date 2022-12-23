const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: { app: path.join(__dirname, 'src', 'components', 'index.tsx') },
	devtool: 'inline-source-map',
	devServer: {
		static: { directory: path.join(__dirname, 'public') },
		devMiddleware: { writeToDisk: true },
		port: 5000,
		client: { logging: 'verbose' },
		hot: true,
		open: true
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: '/node_modules/',
				use: [{ loader: 'babel-loader' }]
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [{ loader: 'file-loader' }]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: { extensions: ['.ts', '.tsx', '.js'] },
	plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
}