import gql from 'graphql-tag';

export const ANYQUERY = gql`
 query anyQuery{
  anyQuery
}
`;

export const LOGIN_USUARIO_VALID = gql`
    query UsuarioValid{
        UsuarioValid{
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