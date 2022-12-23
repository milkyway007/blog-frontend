const path = require('path')

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
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: { extensions: ['.ts', '.tsx', '.js'] }
}