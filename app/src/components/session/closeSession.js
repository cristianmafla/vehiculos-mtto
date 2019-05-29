import React from 'react';
import { ApolloConsumer, Mutation } from 'react-apollo';
import { USER_ONLINE_OFF } from '../../graphql_client/mutations/mutationUser';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import authApp from '../../redux_store/actions/authApp';
import ActionUsersOnline from '../../redux_store/actions/actionUsersOnline';

const btnClose = (onlineOff, email, client, history, handlerToogle, ActionUsersOnline) => {
  onlineOff({ variables: { email } }).then(() => {
    ActionUsersOnline([]);
    localStorage.removeItem('tokenUser', '');
    client.resetStore();
    handlerToogle();
    history.push('/login');
  });
};
const closeSession = ({ history, handlerToogle, email, ActionUsersOnline }) => (
  <ApolloConsumer>
    { client => {
      return(
        <Mutation mutation={USER_ONLINE_OFF}>
          {(onlineOff, { loading, error, data}) => (
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => btnClose(onlineOff, email, client, history, handlerToogle, ActionUsersOnline)}
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