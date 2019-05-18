import gql from 'graphql-tag';

const LOGIN_USER = gql`
    mutation loginUser($correo:String!,$contrasena:String!){
        loginUser(correo:$correo,contrasena:$contrasena){
            token
        }
    }
`;

export { LOGIN_USER };