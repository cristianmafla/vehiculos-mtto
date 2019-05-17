import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authApp from './authApp';

export default combineReducers({
  authApp,
  routerReducer
});


