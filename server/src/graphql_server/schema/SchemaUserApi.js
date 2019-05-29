import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

  """ USUARIO VALIDO """
  userValid:User

  """RETURN CHAT USERS DB"""
  chatUsers:[MessageChatUser]

  usersOnline:[User]

}

type Mutation {

  """LOGIN USUARIO AUTHENTICATION JWT"""
  loginUser(email:String!,password:String!):Token!

  """CREATION NEW USER AND ROLES API"""
  newUser(user:InputUser):User

  """CREATE NEW MESSAGE CHAT USER"""
  newChatUser(user:InputUser,message:String):MessageChatUser


  onlineUserOff(email:String):String

}

type Subscription {

  """SUBSCRIPTION"""
  subChatUsers:MessageChatUser

  """SUBSCRIPTION USER LOGED"""
  subUserLoged:User

}
type UserLoged {
  open:Boolean
  user:User
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

type UserLoged {
  login:String
  userEmail:String
  date:Date
}

type Rol {
  name:String
  checked:Boolean
  description:String
}

type Token {
  token:String
  email:String
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