import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

  """ PAGINATION USERS ONLY ADMIN """
  paginationUsers(limit:Int,offset:Int):[User]

  """ TOTAL USERS FOR PAGINATION ADMIN """
  totalUsers:Int

  """ USER VALID """
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

  """EDIT USER"""
  editUser(user:InputUser):User

  """DELETE USER"""
  deleteUser(email:String):String

  """CREATE NEW MESSAGE CHAT USER"""
  newChatUser(user:InputUser,message:String):MessageChatUser

  """CLOSE SESSION USER"""
  userOnlineOff(email:String):String

}

type Subscription {

  """SUBSCRIPTION CHAT USERS"""
  subChatUsers:MessageChatUser

  """SUBSCRIPTION USER ONLINE"""
  subUsersOnline:UserOnline

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
  mode:String
  online:Boolean
}

type UserOnline {
  update:Boolean
  deleted:Boolean
  user:[User]
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
    mode:String
}
` ;