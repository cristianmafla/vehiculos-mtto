import { PubSub } from 'apollo-server-express';
import { chatUsers as model } from '../../models/chat_users';
import { userApi as modelUser } from '../../models/user_api';
import { getTokenUser, addNewUser, updateUser } from './utils'

const pubsub = new PubSub();

const
  CHAT_USER = 'CHAT_USER',
  CHAT_USERS_ONLINE = 'CHAT_USERS_ONLINE',
  USER_PROFILE = 'USER_PROFILE';

//GENERATE TOKEN
export const loginUser = (email, password) =>  getTokenUser(email, password);

//OBTIENE EL USUARIO DEL TOKEN VALIDADO
export const userValid = async currentUserApi => {
  if (currentUserApi) {
    await usersOnline();
    return new Promise((resolve, reject) => {
      modelUser.findOne({ email: currentUserApi.email })
        .then(userBD => {
          const newUser = {
            name: userBD.name,
            lastname: userBD.lastname,
            email: userBD.email,
            imageUrl: userBD.imageUrl,
            roles: userBD.roles
          };
          const currentUser = {
            name: currentUserApi.name,
            lastname: currentUserApi.lastname,
            email: currentUserApi.email,
            imageUrl: currentUserApi.imageUrl,
            roles: currentUserApi.roles
          };
          newUser == currentUser ? resolve(currentUserApi) : resolve(newUser);
        })
    });
  } else {
    return currentUserApi;
  }
};


//SOLO USUARIOS CON ROL DE ADMIN
export const paginationUsers = (limit, offset, currentUserApi) => {
  if(currentUserApi){
    const rolAdmon = currentUserApi.roles.map(rol => rol.name);
    if (rolAdmon.indexOf('rol_admon') >= 0 ){
      return modelUser.find({}).limit(limit).skip(offset)
              .then(users => users)
              .catch(error => console.log('*** Error_MONGODB_totalUsers', error));
    }
  }
};

export const totalUsers = () => {
  return new Promise((resolve, reject) => {
    modelUser.countDocuments({}, (error, count) => {
      error ? reject(error) : resolve(count);
    });
  });
};

//NUEVO USUARIO Y ROLES PARA INTERACTUAR CON LA API
export const newUser =  user =>  addNewUser(user);

export const editUser =  async user => {
  let objUser = []
  await updateUser(user)
    .then(async (userDB) => {
      await usersOnline(true, false);
      await pubsub.publish(USER_PROFILE, { subUserProfile: userDB });
      objUser = userDB;
    })
    .catch(error => console.log('*** Error_MONGODB_updateUser',error));
    return objUser;
};

export const deleteUser = async email =>  {
  let delt = '';
  await modelUser.deleteOne({ email }).then(async () => {
    await usersOnline(true,true);
    delt = 'delete user ok';
  });
  return delt;
};

export const chatUsers = async () => {
  let objChat = [];
  await model.find({}).then(data => {
    objChat = data;
    return objChat;
  })
  .catch(error => console.log('error_MONGODB_chatUsers',error));
  await objChat.forEach(chat => {
    pubsub.publish(CHAT_USER, { subChatUsers: { new:false, user:chat.user, message:chat.message, date:chat.date } });
  });
  return objChat;
};

export const newChatUser = (user, message) => {
  const date = new Date();
  pubsub.publish(CHAT_USER, { subChatUsers: { new:true, user, message, date } });
  return model.create({ user, message, date }).then(data => data).catch(error => error);
};

export const usersOnline = async (update = false, deleted = false) => {
  let objUsersOn = [];
  await modelUser.find({ online: true }).then(async users => {
    await pubsub.publish(CHAT_USERS_ONLINE, { subUsersOnline: { update, deleted, user: users } });
    objUsersOn = users;
  })
  .catch(error => console.log('*** Error_MONGODB_usersOnline', error));
  return objUsersOn;
};

export const userOnlineOff = async email => {
  await modelUser.updateOne({ email }, { $set: { online: false } })
    .then(() => {})
    .catch(error => console.log('*** Error_MONGODB_userOnlineOff',error));
  await usersOnline(true,false);
 return `user ${email} off`;
};

//***SUBSCRIPTION ITERATORS***//
export const subChatUsers = () => ({ subscribe: () => pubsub.asyncIterator(CHAT_USER) });

export const subUsersOnline = () => ({ subscribe: () => pubsub.asyncIterator(CHAT_USERS_ONLINE) });

export const subUserProfile = () => ({subscribe: () => pubsub.asyncIterator(USER_PROFILE)});

