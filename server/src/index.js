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
const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => console.log(`*** SERVER OPEN http://localhost:${PORT}${server.graphqlPath} ***`));
=======
const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen(PORT, () => {
    console.log(`SERVER ON http://localhost:${PORT}`)
    console.log(`SERVER_APOLLO ON http://localhost:${PORT}${server.graphqlPath}`)
    console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
});
>>>>>>> f618249947d166393d71f2af084b231d0b661d46
