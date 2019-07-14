const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'hidden-source-map',
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
		sourceMapFilename:'main.map'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'src', 'assets'),
				to: path.resolve(__dirname, 'dist', 'assets')
			}
		]),
		new ExtractTextPlugin('bundle.css')
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.scss/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'resolve-url-loader',
						'sass-loader?sourceMap',
						{
							loader: 'postcss-loader',
							options: {
								plugins: function() {
									return [
									require('autoprefixer')
									];
								}
							}
						}
					],
				}),
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				use: [
					'file-loader?name=assets/[name].[ext]',
					'image-webpack-loader?bypassOnDebug'
				]
			}
		]
	}
};
