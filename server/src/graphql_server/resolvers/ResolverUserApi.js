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
  onlineUserOff,
  usersOnline
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

    onlineUserOff: (_, { email }) => onlineUserOff(email),

    newUser: (_, { user }) => newUser(user),

    newChatUser: (_, { user, message }) => newChatUser(user, message)

  },
  Subscription: {

    subChatUsers: subChatUsers(),

  }
};