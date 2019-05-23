import http from 'http';
import express from 'express';
import config from './utils';
import graphQL from './graphql_server';

const
    app = express(),
    PORT = process.env.PORT || 3000;

graphQL.applyMiddleware({ app });

app.use(config);

const httpServer = http.createServer(app);
graphQL.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`*** SERVER OPEN http://localhost:${PORT}${graphQL.graphqlPath} ***`)
  console.log(`*** WS OPEN ON ws://localhost:${PORT}${graphQL.subscriptionsPath} ***`)
});
