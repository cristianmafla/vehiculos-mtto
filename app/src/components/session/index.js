
import React from 'react';
import { Query } from 'react-apollo';
import { LOGIN_USER_VALID } from '../../graphql_client/queries';

const Session = Component => props => (
    <Query query={LOGIN_USER_VALID}>
    {({loading, error, data, refetch})=> {
        if(loading) return null;
        let session = false;
        if(data){
            console.log('DATA USUARIO VALID TOKEN',data);
            session = data.userValid;
        }
        return <Component {...props} refetch={refetch} session={session}/>;
    }}
    </Query>
);

export default Session;