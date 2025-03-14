const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 8000,
		open: true,
		hot: true,
		watchFiles: {
			paths: ['src/**/*.html'],
		},
		host: '0.0.0.0',
		allowedHosts: 'all',
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/i,
				use: [
					MiniCssExtractPlugin.loader, // Tworzy osobne pliki CSS
					'css-loader', // Tłumaczy CSS na CommonJS
					'sass-loader', // Kompiluje SASS do CSS
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][hash][ext][query]',
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/main.css', // Styl zapisuje się w dist/css/main.css
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			favicon: './src/images/favicon.png',
		}),
		new CopyWebpackPlugin({
			patterns: [{from: 'src/locales', to: 'locales'}],
		}),
	],
};
