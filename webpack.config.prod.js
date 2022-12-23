const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
		new CleanPlugin.CleanWebpackPlugin()
	]
}