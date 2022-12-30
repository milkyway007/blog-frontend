const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		static: { directory: path.join(__dirname, 'public') },
		devMiddleware: { writeToDisk: true },
		port: 3000,
		client: { logging: 'verbose' },
		hot: true,
		open: true
	}
})
