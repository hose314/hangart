var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './src/main.jsx',
	output: {
		path: path.join(__dirname, 'assets'),
		filename: 'bundle.js'
	},
	resole: {
		modulesDirectories: ['node_modules']
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel',
				query: {
					presets:['react']
				}
			},
			{
				test: /\.js$/,
			} 
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader' 
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'NODE_ENV': 'production'
		}),
		new webpack.optimize.DedupePlugin()
	]
}