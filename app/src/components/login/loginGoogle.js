import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { NUEVO_USUARIO, LOGIN_USUARIO } from '../../graphql_client/mutation';
import { Mutation } from 'react-apollo';

class Google extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnGoogle:"login google"
        };
    };    
    
    responseUsuario = (usuario,findOrCreate,loginUsuario) => {
        const inputUsuarioGoogle = {
			nombres:usuario.profileObj.givenName,
			apellidos:usuario.profileObj.familyName,
			correo:usuario.profileObj.email,
			contrasena:usuario.profileObj.googleId,
			imageUrl:usuario.profileObj.imageUrl,
			roles:'3'
        };
        findOrCreate({ variables: { input: inputUsuarioGoogle } })        
        .then(user => {
            loginUsuario({ variables: { correo:usuario.profileObj.email, contrasena:usuario.profileObj.googleId} }).then(({ data }) => {
                localStorage.setItem('tokenUsuario', data.loginUsuario);
                this.props.refetch().then(() => this.props.history.push('/usuarios'));
            });
        });
    };
    responseUsuarioError = error => console.log('error_login_google',error);
    
    render(){
        return(
            <Mutation mutation={ NUEVO_USUARIO } >
                { (findOrCreate, {loading, error, data}) => (
                    <Mutation mutation={LOGIN_USUARIO}>
                        {(loginUsuario, { loading, error, data }) => {   
                            loading ? this.state.btnGoogle = 'Ingresando...' : this.state.btnGoogle = 'login google';
                            return(
                                <GoogleLogin
                                    clientId="149169728749-ah5lvkopjcgkspposufkjjhb393t5h8c.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={usuario => this.responseUsuario(usuario,findOrCreate,loginUsuario)}
                                    onFailure={this.responseUsuarioError}
                                    render={renderProps => (
                                      <button
                                        onClick={renderProps.onClick}
                                        className="btn btn-lg btn-block  btn_login_google"
                                        type="button"
                                      >
                                        <i className="fab fa-google"></i> {this.state.btnGoogle}
                                      </button>
                                )}/>                             
                            );
                        }}
                    </Mutation>
                )}  
            </Mutation>
        );
    }
}

export default Google;