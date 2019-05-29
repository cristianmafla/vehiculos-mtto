import React from 'react';
import { ApolloConsumer, Mutation } from 'react-apollo';
import { ONLINE_USER_OFF } from '../../graphql_client/mutations/mutationUser';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import authApp from '../../redux_store/actions/authApp';
import ActionUsersOnline from '../../redux_store/actions/actionUsersOnline';

const btnClose = (onlineOff, email, client, history, handlerToogle, authApp, usersOnline, ActionUsersOnline) => {
  ActionUsersOnline(usersOnline.filter(user => user.email != email));
  onlineOff({ variables: { email } }).then( () => {
    localStorage.removeItem('tokenUser', '');
    authApp('');
    client.resetStore();
    handlerToogle();
    history.push('/login');
  });
};
const closeSession = ({ history, handlerToogle, authApp, email, usersOnline, ActionUsersOnline }) => (
  <ApolloConsumer>
    { client => {
      return(
        <Mutation mutation={ONLINE_USER_OFF}>
          {(onlineOff, { loading, error, data}) => (
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => btnClose(onlineOff, email, client, history, handlerToogle, authApp, usersOnline, ActionUsersOnline)}
            >
              <i className="fas fa-sign-out-alt"></i> salir
              </button>
        )}
        </Mutation>
      );
    }}
  </ApolloConsumer>
);
const mapStateToProps = state => ({
  token: state.authApp,
  usersOnline: state.ActionUsersOnline
});

const mapDispatchToProps = {
  authApp,
  ActionUsersOnline
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(closeSession));