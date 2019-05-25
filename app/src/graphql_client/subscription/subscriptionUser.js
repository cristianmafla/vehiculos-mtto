import gql from 'graphql-tag';

export const SUB_CHAT_USER = gql`
subscription subChatUsers {
  subChatUsers {
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