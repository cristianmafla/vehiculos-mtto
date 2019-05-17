const
	path = require('path'),
	webpack = require('webpack');

module.exports = {
	entry: [ 'webpack-hot-middleware/client', path.resolve(__dirname, 'src') ],
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({'process.env': { NODE_ENV: JSON.stringify('development'), WEBPACK: true } })
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				use: { loader: 'babel-loader', query: { presets: [ 'react-hmre' ] } },
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: /\.(scss|css)/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: { plugins: function() { return [require('autoprefixer')] } }
					},
					{
						loader: 'sass-resources-loader',
						options: { resources: [path.resolve(__dirname, 'src/**/*.scss')] }
					}
				],
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				use: ['file-loader', 'image-webpack-loader?bypassOnDebug']
			}
		]
	}
};
