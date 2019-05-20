import gql from 'graphql-tag';

export const ANYQUERY = gql`
 query anyQuery{
  anyQuery
}
`;

export const LOGIN_USER_VALID = gql`
    query userValid{
        userValid{
            id
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