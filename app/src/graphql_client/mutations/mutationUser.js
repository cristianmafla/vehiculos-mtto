import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation loginUser($email:String!,$password:String!){
        loginUser(email:$email,password:$password){
            token
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