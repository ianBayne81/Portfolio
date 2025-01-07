
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        publicPath: '',
        filename: '[name].bundle.js'
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"],   
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
      ],
    
}


