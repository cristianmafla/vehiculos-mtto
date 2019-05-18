import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

    """ USUARIO VALIDO """
    userValid:User

}

type Mutation {

    """LOGIN USUARIO AUTHENTICATION JWT"""
    loginUser(correo:String!,contrasena:String!):Token!

    """CREATION NEW USER AND ROLES API"""
    newUser(user:InputUser):User

}

type User {
    state:Boolean
    message:String
    id:Int
    nombres:String
    apellidos:String
    correo:String
    imageUrl:String
    roles:[Rol]
}

type Token {
    token:String
}

type Rol {
    id:String
    nombre:String
    descripcion:String
}

input InputUser {
    nombres:String
    apellidos:String
    correo:String
    contrasena:String
    imageUrl:String
    roles:String
    file:Upload
}
` ;