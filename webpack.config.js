/* jshint node:true */

'use strict';

const path = require('path');
const webpack = require('webpack');

const config = {
	debug: true,
	devtool: 'source-map',
	entry: {
		sandbox: path.resolve(__dirname, './lib/index.js')
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
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}, {
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	devServer: {
		hot: true,
		progress: true,
		host: process.env.HOST,
		port: process.env.PORT || 3979,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	plugins: []
};

module.exports = config;
