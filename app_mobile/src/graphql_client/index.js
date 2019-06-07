import ApolloClient from 'apollo-client';
import { link, cache, fetchOptions, onError} from './utils';

const client = new ApolloClient({
    link,
    cache,
    fetchOptions,
    onError
});

export default client;