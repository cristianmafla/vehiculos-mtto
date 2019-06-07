import fs from 'fs';
import { withFilter } from 'apollo-server-express';
import { GraphQLUpload } from 'graphql-upload';
import {
  paginationUsers,
  totalUsers,
  loginUser,
  userValid,
  newUser,
  editUser,
  deleteUser,
  chatUsers,
  newChatUser,
  subChatUsers,
  userOnlineOff,
  usersOnline,
  subUsersOnline,
  subUserProfile
  } from '../api/db_nosql/controllers/users_api';

export default {

  Upload: GraphQLUpload,

  Query: {

    userValid: (_, args, { currentUserApi }) => userValid(currentUserApi),

    chatUsers: (_, args) => chatUsers(),

    usersOnline: (_, args) => usersOnline(),

    paginationUsers: (_, { limit, offset }, { currentUserApi }) => paginationUsers(limit, offset, currentUserApi),

    totalUsers: (_, args) => totalUsers()

  },
  Mutation:{

    loginUser: (_, { email, password }) => loginUser(email, password),

    userOnlineOff: (_, { email }) => userOnlineOff(email),

    newUser: (_, { user }) => newUser(user),

    editUser: (_,{ user }) => editUser(user),

    newChatUser: (_, { user, message }) => newChatUser(user, message),

    deleteUser: (_, { email }) => deleteUser(email)

  },
  Subscription: {

    subChatUsers: subChatUsers(),

    subUsersOnline: subUsersOnline(),

    subUserProfile: subUserProfile()

  }
};