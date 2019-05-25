import { PubSub } from 'apollo-server-express';
import { chatUsers as model } from '../../models/chat_users';
import { getTokenUser, addNewUser } from './utils'

const pubsub = new PubSub();

const CHAT_USER = 'CHAT_USER';

//GENERATE TOKEN
export const loginUser = (email, password) => getTokenUser(email, password);

//OBTIENE EL USUARIO DEL TOKEN VALIDADO
export const userValid = currentUserApi => currentUserApi;

//NUEVO USUARIO Y ROLES PARA INTERACTUAR CON LA API
export const newUser =  user =>  addNewUser(user);

export const chatUsers = async () => {
  let objChat = [];
  await model.find({}).then(data => {
    objChat = data;
    return objChat;
  })
  .catch(error => console.log('error_MONGODB_chatUsers',error));
  await objChat.forEach(chat => {
    setTimeout(() => {
      pubsub.publish(CHAT_USER, { subChatUsers: { user:chat.user, message:chat.message, date:chat.date } });
    }, 10);
  });
  return objChat;
};

export const newChatUser = (user, message) => {
  const date = new Date();
  setTimeout(() => {
    pubsub.publish(CHAT_USER, { subChatUsers: { user, message, date } });
  }, 100);
  return model.create({ user, message, date }).then(data => data).catch(error => error);
};

export const subChatUsers = () => ({ subscribe: () => pubsub.asyncIterator(CHAT_USER) });