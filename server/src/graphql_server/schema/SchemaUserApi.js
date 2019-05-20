import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

    """ USUARIO VALIDO """
    userValid:User

}

type Mutation {

    """LOGIN USUARIO AUTHENTICATION JWT"""
    loginUser(email:String!,password:String!):Token!

    """CREATION NEW USER AND ROLES API"""
    newUser(user:InputUser):User

}

type User {
    state:Boolean
    message:String
    id:Int
    name:String
    lastname:String
    email:String
    imageUrl:String
    roles:[Rol]
}

type Rol {
    name:String
    checked:Boolean
}

type Token {
    token:String
}

input InputRolUser {
    name:String
    checked:Boolean
}

input InputUser {
    name:String
    lastname:String
    email:String
    password:String
    imageUrl:String
    roles:[InputRolUser]
    file:Upload
}
` ;