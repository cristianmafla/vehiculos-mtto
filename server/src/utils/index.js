import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpackConfig from './appWebpack';
import session_redis from './session_DB_Redis';
import sessions_sequelize from './session_DB_Sequelize';



const appConfig = express();

appConfig
    .use(webpackConfig)
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cookieParser('keyboard cat'))
    .use(session_redis)
//.use(sessions_sequelize));

export default appConfig;