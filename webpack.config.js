const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require('webpack-node-externals');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    plugins: [
        new NodePolyfillPlugin()
    ],
    resolve: {
        fallback: {
          "child_process": false,
          "fs": false,
          "worker_threads": false,
          "inspector": false,
          // and also other packages that are not found
        }
      },
    externals: [nodeExternals()],
    watch: true,
}