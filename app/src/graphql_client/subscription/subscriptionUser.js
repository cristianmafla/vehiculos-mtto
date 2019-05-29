import gql from 'graphql-tag';

export const SUB_CHAT_USER = gql`
subscription subChatUsers {
  subChatUsers {
      new
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

export const SUB_USER_LOGED = gql`
  subscription subUserLoged{
    subUserLoged{
      name
      lastname
      email
      imageUrl
    }
  }
`;
