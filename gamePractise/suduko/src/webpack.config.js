'use strict';

module.exports = {
	entry: {
		index: './js/index'
	},
	output: {
		filename: '[name].js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: ["sudoku/src/node_modules"], // 绝对路径
				query: {
					presets: ["es2015"]
				}
			}
		]
	}
};