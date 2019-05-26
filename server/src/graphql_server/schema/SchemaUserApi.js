import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

  """ USUARIO VALIDO """
  userValid:User

  """RETURN CHAT USERS DB"""
  chatUsers:[MessageChatUser]

}

type Mutation {

  """LOGIN USUARIO AUTHENTICATION JWT"""
  loginUser(email:String!,password:String!):Token!

  """CREATION NEW USER AND ROLES API"""
  newUser(user:InputUser):User

  """CREATE NEW MESSAGE CHAT USER"""
  newChatUser(user:InputUser,message:String):MessageChatUser

}

type Subscription {
  """SUBSCRIPTION """
  subChatUsers:MessageChatUser
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
  description:String
}

type Token {
  token:String
}

type MessageChatUser {
  new:Boolean
  message:String
  user:User
  date:Date
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