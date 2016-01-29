var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.join(__dirname, 'assets'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("common.css"),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'NODE_ENV': 'production'
		}),
		new webpack.optimize.DedupePlugin()
	]
}