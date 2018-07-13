const webpack = require('webpack');

const webpackMerge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const milieu = process.env.NODE_ENV || 'development';

const myIp = require('my-ip')();

const APP_PATH = process.cwd();

const apiMocker = require('webpack-api-mocker');

const path = require('path');

const {
	entry
} = require('./package.json');

const config = {
	mode: milieu,
	entry,
	output: {
		path: `${APP_PATH}/dist`,
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			loader: 'babel-loader',
		},
		{
			test: /\.(css|scss)$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader'
			]
		},
		{
			test: /\.less$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'less-loader',
			],
		},
		{
			test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
			loader: 'url-loader',
			options: {
				limit: 10000
			}
		},
		{
			test: /\.html$/i,
			use: 'html-loader'
		}
		]
	},
	devServer: {
		host: milieu === 'development' ? 'localhost' : myIp,
		port: '8001',
		stats: 'none',
		before: app => {
			// apiMocker(app, path.resolve('./proxy.js'));
			// console.log(mocker);
			app.get('/api/mock', (req, res) => {
				res.json({
					data: 'oks'
				});
			});
		}
	},
	optimization: {
		minimize: milieu === 'production' ? true : false,
		namedModules: true,
		noEmitOnErrors: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/test-index.html',
			inject: false,
			minify: {
				removeAttributeQuotes: milieu === 'production' ? true : false
			}
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new webpack.EvalSourceMapDevToolPlugin({
			filename: '[name].js.map',
		}),
		// new MockWebpackPlugin()
	]
};


module.exports = config;