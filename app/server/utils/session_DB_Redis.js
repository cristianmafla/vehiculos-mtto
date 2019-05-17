import express from 'express';
import session from 'express-session';
import redis from 'redis';


const
    client = redis.createClient(),
    RedisStore = require('connect-redis')(session),
    store = new RedisStore({ host: '127.0.0.1', port: 6379, client: client, ttl: 260 }),
    app = express();

    app.use(session({
        secret: 'keyboard cat',
        store: store,
        resave: false,
        proxy: true,
        saveUninitialized: true,
        cookie: { secure: false }//true in production
    }));


export default app;

