
import express from 'express';
import Sequelize from 'sequelize';
import session from 'express-session';

const
    database = 'colombia',
    username = 'root',
    password = '',
    dialect = 'mysql';

const
    SequelizeStore = require('connect-session-sequelize')(session.Store),
    storeSessions = new SequelizeStore({ db: new Sequelize({ database, username, password, dialect }) }),
    app = express();

    app.use(session({
        secret: 'keyboard cat',
        store: storeSessions,
        resave: false,
        proxy: true,
        saveUninitialized: true,
        cookie: { secure: false }//true in production
    }));


export default app;