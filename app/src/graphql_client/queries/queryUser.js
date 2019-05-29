import gql from 'graphql-tag';

export const ANYQUERY = gql`
  query anyQuery{
    anyQuery
  }
`;

export const LOGIN_USER_VALID = gql`
    query userValid{
      userValid{
        name
        lastname
        email
        imageUrl
      }
    }
`;

export const CHAT_USERS = gql`
  query chatUsers{
    chatUsers{
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

export const USERS_ONLINE = gql`
  query usersOnline{
    usersOnline{
      name
      lastname
      email
      imageUrl
    }
  }
`;