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
            nombres
            apellidos
            correo
            imageUrl
            roles{
                id
                nombre
                descripcion
            }
        }
    }
`;