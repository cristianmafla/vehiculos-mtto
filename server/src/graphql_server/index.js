import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './schema';
import {context,uploads,subscriptions} from './utils';


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    uploads,
    subscriptions
});

export default server;