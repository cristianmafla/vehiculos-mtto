import React from 'react';
import { Query } from 'react-apollo';
import { LOGIN_USER_VALID } from '../../graphql_client/queries/queryUser';


const Session = Component => props => (
    <Query query={LOGIN_USER_VALID}>
    {({loading, error, data, refetch})=> {
        if(error) return console.log('ERROR_LOGIN_USER_VALID',error);
        if(loading) return null;
        let session = false;
        if(data){
            console.log('*** TOKEN ACCESS CLIENT: ', data.userValid);
            session = data.userValid;
        };
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