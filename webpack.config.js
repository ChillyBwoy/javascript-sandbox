/* jshint node:true */

'use strict';

const path = require('path');
const webpack = require('webpack');

const config = {
	debug: true,
	devtool: 'source-map',
	entry: {
		app: ['babel-polyfill', './lib/index.js']
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel'
			}
		]
	},
	devServer: {
		hot: true,
		progress: true,
		contentBase: path.join(__dirname, 'public'),
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	plugins: []
};

module.exports = config;
