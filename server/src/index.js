import http from 'http';
import express from 'express';
import config from './utils';
import graphQL from './graphql_server';

import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const
    app = express(),
    PORT = process.env.PORT || 3000;

graphQL.applyMiddleware({ app });

app.use(config);

const httpServer = http.createServer(app);
graphQL.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
    console.log(`*** SERVER OPEN ${process.env.HTTP}://${process.env.BASE_URL_LOCAL}:${PORT}${graphQL.graphqlPath} ***`);
    console.log(`*** WS OPEN ON ${process.env.WS}://${process.env.BASE_URL_LOCAL}:${PORT}${graphQL.subscriptionsPath} ***`);
});
