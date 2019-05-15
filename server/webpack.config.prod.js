const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle_server.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				include: path.resolve(__dirname, 'src')
			}
		]
	}
};