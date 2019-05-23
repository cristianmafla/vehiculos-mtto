import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import {
  loginUser,
  userValid,
  newUser,
  chatUsers,
  newChatUser,
  subChatUsers } from '../api/db_nosql/controllers/users_api';

export default {

  Upload: GraphQLUpload,

  Query: {

    userValid: (_, args, { currentUserApi }) => userValid(currentUserApi),

    chatUsers: (_, args) => chatUsers()

  },
  Mutation:{

    loginUser: (_, { email, password }) => loginUser(email, password),

    newUser: (_, { user }) => newUser(user),

    newChatUser: (_, { user, message }) => newChatUser(user, message)

  },
  Subscription: {

    subChatUsers: subChatUsers()

  }
};