import path from 'path';
import express from 'express';
import webpack from 'webpack';


const app = express();
if (process.env.NODE_ENV === 'development'){
    const config = require('../../webpack.config.dev');
    const compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    }))
    .use(require('webpack-hot-middleware')(compiler))
    .use('/public',express.static(path.resolve(__dirname, '../../src')));
} else if (process.env.NODE_ENV === 'production') {
    app.use('/public',express.static(path.resolve(__dirname, '../../dist')));
};

export default app;