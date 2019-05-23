import { PubSub } from 'apollo-server-express';
import { getTokenUser, addNewUser } from './utils'

const pubsub = new PubSub();

const CHAT_USER = 'CHAT_USER';

//GENERATE TOKEN
export const loginUser = (email, password) => getTokenUser(email, password);

//OBTIENE EL USUARIO DEL TOKEN VALIDADO
export const userValid = currentUserApi => currentUserApi;

//NUEVO USUARIO Y ROLES PARA INTERACTUAR CON LA API
export const newUser =  user =>  addNewUser(user);

export const chatUsers = () => {
  const obj = [{
    message: '1 MESSAGE DATABASE',
    date: new Date(),
    user: {
        name: 'Usuario2',
        lastname: 'lorem',
        email: 'usuario2@gmail.com',
        imageUrl: '',
        roles: [{
            name: 'r_admon',
            checked: true,
            description:'admon site'
        }],
    }
  },
  {
    message: '2 MESSAGE DATABASE',
    date: new Date(),
    user: {
      name: 'Usuario2',
      lastname: 'lorem',
      email: 'usuario2@gmail.com',
      imageUrl: '',
      roles: [{
        name: 'r_admon',
        checked: true,
        description: 'admon site'
      }],
    }
  },
  {
    message: '3 MESSAGE DATABASE',
    date: new Date(),
    user: {
      name: 'Usuario3',
      lastname: 'lorem',
      email: 'usuario3@gmail.com',
      imageUrl: '',
      roles: [{
        name: 'r_admon',
        checked: true,
        description: 'admon site'
      }],
    }
  }];

  setTimeout(() => {
    pubsub.publish(CHAT_USER, { subChatUsers: { user:obj[0].user, message:obj[0].message, date:obj[0].date } });
  }, 200);
  return obj;
};

export const newChatUser = (user, message) => {
  setTimeout(() => {
    pubsub.publish(CHAT_USER, { subChatUsers: { user, message, date:new Date() } });
  }, 200);
  return {
    user,
    message
  }
};

export const subChatUsers = () => ({
    subscribe: () => pubsub.asyncIterator(CHAT_USER)
});