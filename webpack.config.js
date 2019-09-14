var webpack = require("webpack");

module.exports = {
	entry: "./index",
	target: "node",
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
	]
};
