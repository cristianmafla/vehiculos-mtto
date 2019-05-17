
import React from 'react';
import { Query } from 'react-apollo';
import { LOGIN_USUARIO_VALID } from '../../graphql_client/queries';

const Session = Component => props => (
    <Query query={LOGIN_USUARIO_VALID}>
    {({loading, error, data, refetch})=> {
        if(loading) return null;
        let session = false;
        if(data){
            session = data.UsuarioValid;
        }
        return <Component {...props} refetch={refetch} session={session}/>;
    }}
    </Query>
);

export default Session;