import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpackConfig from './appWebpack';
import session_redis from './session_DB_Redis';

const app = express();

app
    .use(webpackConfig)
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cookieParser('keyboard cat'))
    .use(session_redis);

export default app;