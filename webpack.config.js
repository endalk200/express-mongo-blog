const path = require("path")

const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    mode: "production",
    entry: "./static/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
        ]
    },
    plugins: [
        new DashboardPlugin()
    ]
}