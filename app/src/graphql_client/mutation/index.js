import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation loginUser($correo:String!,$contrasena:String!){
        loginUser(correo:$correo,contrasena:$contrasena){
            token
        }
    }
`;

export const NEW_USER = gql`
    mutation newUser($user:InputUser){
        newUser(user:$user){
            state
            message
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