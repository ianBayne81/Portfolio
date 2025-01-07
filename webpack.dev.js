const path = require('path')

module.exports = {
    mode: 'development',
    
    devServer: {
    static: {
        directory: path.join(__dirname, './public')
        },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    },
    
}


