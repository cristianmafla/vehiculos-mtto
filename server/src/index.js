import http from 'http'
import express from 'express'
import appConfig from './utils'
import server from './graphql_server'

const
    app = express(),
    PORT = process.env.PORT || 3000

server.applyMiddleware({ app })

app.use(appConfig);

<<<<<<< HEAD
const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen(PORT, () => {
    console.log(`SERVER ON http://localhost:${PORT}`)
    console.log(`SERVER_APOLLO ON http://localhost:${PORT}${server.graphqlPath}`)
    console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
});
=======
const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => console.log(`*** SERVER OPEN http://localhost:${PORT}${server.graphqlPath} ***`));
>>>>>>> 23bdd6d06152dd5759ca961e85957971ba086e5f
