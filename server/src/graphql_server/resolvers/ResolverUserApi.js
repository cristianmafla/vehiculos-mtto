import { loginUser, userValid } from '../api/db_nosql/controllers/users_api';

export default {

    Query: {

        userValid: (_, args, { currentUserApi }) => userValid(currentUserApi),

    },
    Mutation:{

        loginUser: (_, { correo, contrasena }) => loginUser(correo, contrasena),

    }
};