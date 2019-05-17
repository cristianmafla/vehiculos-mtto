import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { BASE_URL_GRAPHQL, BASE_WS_GRAPHQL } from './urlGrapQL';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ws from 'isomorphic-ws';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from "subscriptions-transport-ws";
import { getMainDefinition } from 'apollo-utilities';

//fetch para el funcionamiento del cliente graphql en el renderizado del servidor
global.fetch = require('node-fetch');

const UploadLink = createUploadLink({ uri:BASE_URL_GRAPHQL});
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('tokenUser');
    return { headers: { authorization: token } };
});

const numAleatory = () => Math.floor((Math.random() * 100000000) + 1);

const client = new SubscriptionClient(BASE_WS_GRAPHQL, {
  reconnect: true ,
  connectionParams: {
    authorization:numAleatory(),
  }
},ws);

const wsLink = new WebSocketLink(client);

const link = process.browser ? split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  authLink.concat(UploadLink)
) : authLink.concat(UploadLink);

const cache = new InMemoryCache({ addTypename: false });
const fetchOptions = { credentials: 'include' };
const onError = ({ networkError, graphQLErrors }) => {
    console.log('netWorkError__', networkError);
    console.log('graphQLErrors__', graphQLErrors);
};

export {link,cache,fetchOptions,onError};