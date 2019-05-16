import app from './utils';
import graphQL from './graphql_server';

graphQL.applyMiddleware({app});
graphQL.installSubscriptionHandlers(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`*** SERVER OPEN http://localhost:${PORT}${graphQL.graphqlPath} ***`));
