import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.js';
import opn from 'opn';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

let app = express();
let compiler = webpack(config);
let PORT = process.argv[2] ? parseInt(process.argv[2]) : 8080;

app.use(webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening at http://localhost:${PORT}`);
    opn(`http://localhost:${PORT}`);
});