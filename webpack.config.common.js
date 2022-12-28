const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: { app: path.join(__dirname, 'src', 'components', 'index.tsx') },
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
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: { extensions: ['.ts', '.tsx', '.js'] },
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
		new CleanPlugin.CleanWebpackPlugin()
	]
}
