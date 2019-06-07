import React from 'react';
import { Query } from 'react-apollo';
import { LOGIN_USER_VALID } from '../../../graphql_client/queries/queryUser';


const Session = Component => props => (
    <Query query={LOGIN_USER_VALID} pollInterval={20000}>
    {({loading, error, data, refetch})=> {
        if(error) return console.log('ERROR_LOGIN_USER_VALID',error);
        if(loading) return null;
        let session = false;
        if(data){session = data.userValid};
        return(
            <Component
                {...props}
                refetch={refetch}
                session={session}
            />
        );
    }}
    </Query>
);

export default Session;