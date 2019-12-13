const path = require('path');

// This is use to create our index.html file.
// The webpack plugin will also include the index_bundle.js into a script tag into our template file: index.html file.
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Load a custom template (lodash by default)
            template: './src/index.html'
        })
    ]
};
