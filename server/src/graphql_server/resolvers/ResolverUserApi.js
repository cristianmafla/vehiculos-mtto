import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import { loginUser, userValid, newUser } from '../api/db_nosql/controllers/users_api';

export default {

    Upload: GraphQLUpload,

    Query: {

        userValid: (_, args, { currentUserApi }) => userValid(currentUserApi),

    },
    Mutation:{

        loginUser: (_, { email, password }) => loginUser(email, password),

        newUser: (_, { user }) => newUser(user)

    }
};