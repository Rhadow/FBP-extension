var path = require('path'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    pkg = require('./package.json');

var nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'dist'),
    mainPath = path.resolve(__dirname, 'src', 'index.js');

var config = {
    entry: {
        app: [
            mainPath
        ]
    },
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                loader: 'babel',
                exclude: nodeModulesPath
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass', 'postcss']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d\.\d\.\d)?$/,
                loader: 'url?limit=8192'
            },
            {
                test : /\.(woff|woff2|ttf|eot)(\?v=\d\.\d\.\d)?$/,
                loader: 'url'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};

module.exports = config;