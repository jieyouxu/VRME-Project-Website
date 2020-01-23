const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/main.jsx",
	mode: "production",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				sideEffects: true
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
	         	use: ["file-loader"],
	      	}
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "[name].bundle.js"
	},
	devServer: {
		contentBase: __dirname,
		port: 3000,
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true,
		historyApiFallback: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	optimization: {
		concatenateModules: true,
		mergeDuplicateChunks: true,
		minimize: true,
		nodeEnv: "production",
		providedExports: true,
		removeAvailableModules: true,
		removeEmptyChunks: true,
		sideEffects: true,
		usedExports: true
	}
};
