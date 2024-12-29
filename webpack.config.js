const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	// development mode setting
	mode: 'development',
	entry: './src/js/app.js', // Główny plik JS
	output: {
		filename: 'bundle.js', // Plik wynikowy JS
		path: path.resolve(__dirname, 'dist'), // Folder docelowy
		// clean dist folder before each build
		clean: true,
	},
	// devtool for source map to control the errors
	devtool: 'source-map',
	// settings for dev server on localhost
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 8000, // server port
		open: true, // open in browser
		hot: true, // turn on Hot Module Replacement
		// liveReload: true,
		watchFiles: {
			paths: ['src/**/*.html'], // Śledzi zmiany w plikach HTML w folderze src
		},
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
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
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][hash][ext][query]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', // Szablon HTML
			filename: 'index.html', // Wygenerowany plik HTML w folderze dist
		}),
	],
};
