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

}

type User {
    id:Int
    nombres:String
    apellidos:String
    correo:String
    imageUrl:String
    roles:Rol
}

type Token {
    token:String
}

type Rol {
    id:String
    nombre:String
    descripcion:String
}
` ;