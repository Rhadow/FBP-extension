var path = require('path'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss');

var eslintrcPath = path.resolve(__dirname, '.eslintrc'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'dist'),
    mainPath = path.resolve(__dirname, 'src', 'index.js');

process.env.NODE_ENV = 'production';

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
        preLoaders: [
            {
                test: /\.js(x)?$/,
                loader: 'eslint',
                exclude: nodeModulesPath
            }
        ],
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
    eslint: {
        configFile: eslintrcPath
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};

module.exports = config;