import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Mutation } from 'react-apollo';
import { NEW_USER, LOGIN_USER } from '../../../graphql_client/mutations/mutationUser'

class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  googleUser = (userGoogle, newUser, loginUser) => {
    const user = {
      name: userGoogle.w3.ofa,
      lastname: userGoogle.w3.wea,
      email:userGoogle.w3.U3,
      password:userGoogle.w3.Eea,
      imageUrl:userGoogle.w3.Paa,
      roles: [{
        name: 'rol_admon',
        checked: false
      },
      {
        name: 'rol_client',
        checked: false
      },
      {
        name: 'rol_invited',
        checked: true
      }],
      file:false,
      mode:'google'
    };
    newUser({ variables: { user } })
      .then(() => {
        loginUser({variables: { email:user.email, password:user.password } })
          .then(({data}) => {
            switch (data.loginUser.token) {
              case 'password error':
                this.setState({ errorValid: { error: true, message: data.loginUser.token } });
                break;
              case 'user error':
                this.setState({ errorValid: { error: true, message: data.loginUser.token } });
                break;
              default:
                this.setState({ errorValid: { error: false, message: null } });
                localStorage.setItem('tokenUser', data.loginUser.token);
                this.props.refetch()
                  .then(() => this.props.history.push('/user_car'))
                  .catch(error => console.log('*** Error_refetch', error));
                break;
            };
          })
          .catch(error => console.log('*** Error_GRAPHQL_newUser',error))
      })
      .catch(error => console.log('*** Error_GRAPHQL_newUser',error))
  };

  googleUserError = error => console.log('error_login_google', error);

  render() {
    return (
      <Mutation mutation={NEW_USER}>
        {(newUser, { loading, error, data }) => {
          if (error) return console.log('error_GRAPHQL_NEW_USER',error);
          return (
            <Mutation mutation={LOGIN_USER}>
              {(loginUser,{ data }) => {
                if (error) return console.log('error_ GRAPHQL_LOGIN_USER',error);
                return(
                  <GoogleLogin
                    clientId="149169728749-lba65j2sd1cijiu1sad489tshlla3b1d.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={userGoogle => this.googleUser(userGoogle, newUser, loginUser)}
                    onFailure={this.googleUserError}
                    render={renderProps => (
                      <button
                        onClick={renderProps.onClick}
                        className="btn btn-lg btn-block  btn_login_google mb-2"
                        type="button"
                      >
                        <i className="fab fa-google"></i> {loading ? 'cargando...' : 'login google'}
                      </button>
                    )}
                  />
                )
              }}
            </Mutation>
          );
        }}
      </Mutation>
    );
  }
}

export default Google;