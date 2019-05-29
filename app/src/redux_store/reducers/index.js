import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authApp from './authApp';
import ActionChat from './chat';
import ActionNotificationChat from './notificationChat';
import ActionUsersOnline from './usersOnline';

export default combineReducers({
  routerReducer,
  authApp,
  ActionChat,
  ActionNotificationChat,
  ActionUsersOnline
});