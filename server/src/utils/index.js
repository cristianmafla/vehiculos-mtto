import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session_redis from './session_DB_Redis';

const app = express();

app
    .use('/public',express.static(path.resolve(__dirname, '../../public')))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cookieParser('keyboard cat'))
    .use(session_redis);

export default app;