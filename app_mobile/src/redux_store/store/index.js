import reducers from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const
    history = createBrowserHistory(),
    composeEnhancers = composeWithDevTools({}),
    store = createStore(reducers, applyMiddleware(routerMiddleware(history)), composeEnhancers(applyMiddleware(thunk)));

export { store, history };