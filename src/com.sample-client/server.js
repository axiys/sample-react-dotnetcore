var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require("path");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: "public/",
    proxy: {
        '/api/*': {
            target: 'http://localhost:49339/',
            changeOrigin: true,
            // pathRewrite: {
            //     '^/api': ''
            // }
        }
    }
}).listen(8001, 'localhost', function (error) {
    if (error) {
        return console.log(error);
    }
    console.log('Server running at http://localhost:8001/');
});
