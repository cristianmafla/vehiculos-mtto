import fs from 'fs';
import { withFilter } from 'apollo-server-express';
import { GraphQLUpload } from 'graphql-upload';
import {
  loginUser,
  userValid,
  newUser,
  chatUsers,
  newChatUser,
  subChatUsers,
  userOnlineOff,
  usersOnline,
  subUsersOnline
  } from '../api/db_nosql/controllers/users_api';

export default {

  Upload: GraphQLUpload,

  Query: {

    userValid: (_, args, { currentUserApi }) => userValid(currentUserApi),

    chatUsers: (_, args) => chatUsers(),

    usersOnline: (_, args) => usersOnline()

  },
  Mutation:{

    loginUser: (_, { email, password }) => loginUser(email, password),

    userOnlineOff: (_, { email }) => userOnlineOff(email),

    newUser: (_, { user }) => newUser(user),

    newChatUser: (_, { user, message }) => newChatUser(user, message)

  },
  Subscription: {

    subChatUsers: subChatUsers(),

    subUsersOnline: subUsersOnline()

  }
};