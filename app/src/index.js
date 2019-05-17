import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './routes';
import client from './graphql_client';
import {store, history } from './redux_store/store';

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App history={history} />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
  , document.getElementById('app'));

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
  module.hot.accept('./redux_store/reducers', () => {
    store.replaceReducer(require('./redux_store/reducers').default);
  });
}
