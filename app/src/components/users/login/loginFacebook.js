import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Mutation } from 'react-apollo';
import { NEW_USER, LOGIN_USER } from '../../../graphql_client/mutations/mutationUser'

class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

  facebookUser = (userFacebook, newUser, loginUser) => {
    console.log('userFacebook',userFacebook);
    const user = {
        name: userFacebook.name,
        lastname: userFacebook.name,
        email: userFacebook.email,
        password: userFacebook.id,
        imageUrl: userFacebook.picture.data.url,
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
        file: false,
        mode:'facebook'
    };
    newUser({ variables: { user } })
      .then(() => {
          loginUser({ variables: { email: user.email, password: user.password } })
            .then(({ data }) => {
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
            .catch(error => console.log('*** Error_GRAPHQL_newUser', error))
      })
      .catch(error => console.log('*** Error_GRAPHQL_newUser', error))
    };

    facebookUserError = error => console.log('error_login_google', error);

    render() {
      return (
        <Mutation mutation={NEW_USER}>
          {(newUser, { loading, error, data }) => {
            if (error) return console.log('error_GRAPHQL_NEW_USER', error);
            return (
              <Mutation mutation={LOGIN_USER}>
                {(loginUser, { data }) => {
                  if (error) return console.log('error_ GRAPHQL_LOGIN_USER', error);
                  return (
                    <FacebookLogin
                        appId="529093497600803"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={userFacebook => this.facebookUser(userFacebook, newUser, loginUser)}
                        redirectUri="http://localhost:5050/"
                        render={renderProps => (
                            <button
                                onClick={renderProps.onClick}
                                className="btn btn-lg btn-block  btn_login_facebook margint"
                                type="button"
                            >
                            <i className="fab fa-facebook-square"></i> {loading ? 'cargando...' : 'login Facebook'}
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

export default Facebook;





