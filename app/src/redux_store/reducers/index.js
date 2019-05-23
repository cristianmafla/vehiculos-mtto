import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authApp from './authApp';
import ActionChat from './chat';
import notificationChat from './notificationChat';

export default combineReducers({
  routerReducer,
  authApp,
  ActionChat,
  notificationChat
});


