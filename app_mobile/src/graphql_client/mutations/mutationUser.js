import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation loginUser($email:String!,$password:String!){
    loginUser(email:$email,password:$password){
      token
      email
    }
  }
`;

export const NEW_USER = gql`
  mutation newUser($user:InputUser){
    newUser(user:$user){
      state
      message
      name
      lastname
      email
      imageUrl
      roles{
          name
          checked
      }
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser($user:InputUser){
    editUser(user:$user){
      state
      message
      name
      lastname
      email
      imageUrl
      roles{
          name
          checked
      }
    }
  }
`;

export const NEW_CHAT_USER = gql`
mutation newChatUser($user:InputUser,$message:String){
  newChatUser(user:$user,message:$message){
    message
    date
    user{
      name
      lastname
      email
      imageUrl
      roles{
        name
        checked
      }
    }
  }
}
`;
export const DELETE_USER = gql`
  mutation deleteUser($email:String){
    deleteUser(email:$email)
  }
`;

export const USER_ONLINE_OFF  = gql`
mutation userOnlineOff($email:String){
  userOnlineOff(email:$email)
}
`;