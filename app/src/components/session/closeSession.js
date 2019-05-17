import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import authApp from '../../redux_store/actions/authApp';

const btnClose = (user,history,handlerToogle,authApp) => {
    localStorage.removeItem('tokenUser','');
    authApp('');
    user.resetStore();
    handlerToogle();
    history.push('/login');
};
const closeSession = ({ history, handlerToogle, authApp }) => (
    <ApolloConsumer>
        { usuario => {
            return(
                <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={()=> btnClose(usuario, history, handlerToogle, authApp)}
                >
                    <i className="fas fa-sign-out-alt"></i> salir
                </button>
            );
        }}
    </ApolloConsumer>
);
const mapStateToProps = state => ({
    token: state.authApp,
});

const mapDispatchToProps = {
    authApp,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(closeSession));