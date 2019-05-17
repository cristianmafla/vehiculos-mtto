import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { NUEVO_USUARIO, LOGIN_USUARIO } from '../../graphql_client/mutation';
import { Mutation } from 'react-apollo';

class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnFacebook:"login facebook"
        };
    };    
    
    responseUsuario = (usuario,findOrCreate,loginUsuario) => {
        const inputUsuarioFacebook = {
			nombres:usuario.name,
			apellidos:usuario.name,
			correo:usuario.email,
			contrasena:usuario.id,
			imageUrl:usuario.picture.data.url,
			roles:'3'
        };
        findOrCreate({ variables: { input: inputUsuarioFacebook } })
        .then(user => {
            loginUsuario({ variables: { correo:usuario.email, contrasena:usuario.id} }).then(({ data }) => {
                localStorage.setItem('tokenUsuario', data.loginUsuario);
                this.props.refetch().then(() => this.props.history.push('/usuarios'));
            });
        });
    };
    
    render(){
        return(
            <Mutation mutation={ NUEVO_USUARIO } >
                {(findOrCreate,{ loading, error, data }) => (        
                        <Mutation mutation={LOGIN_USUARIO}>
                            {(loginUsuario, { loading, error, data }) => {
                                loading ? this.state.btnFacebook = 'Ingresando...' : this.state.btnFacebook = 'login facebook';
                                return(
                                    <FacebookLogin
                                        appId="529093497600803"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={usuario => this.responseUsuario(usuario,findOrCreate,loginUsuario)}
                                        redirectUri= "https://reactnode-cristiancaxi.c9users.io:8080/"
                                        render={renderProps => (
                                            <button 
                                                onClick={renderProps.onClick} 
                                                className="btn btn-lg btn-block  btn_login_facebook margint"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-square"></i> {this.state.btnFacebook}
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

export default Facebook;