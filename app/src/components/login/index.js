import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import TemplateLayout from '../templateLayout';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { LOGIN_USER } from '../../graphql_client/mutation';
import MessageFlash from '../utils/messageflash';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                correo: '',
                contrasena: ''
            },
            errorValid:{
                error:false,
                message:''
            },
            btnSubmit:"Ingresar"
        };
    };

    handleSubmit = (event, loginUser) => {
        event.preventDefault();
        const { correo, contrasena } = this.state.usuario;
        if (correo !== '' && contrasena !== ''){
            loginUser().then(({ data }) => {
              switch (data.loginUser.token) {
                  case 'contraseña incorrecta':
                      this.setState({ errorValid: { error: true, message: data.loginUser.token } });
                      break;
                  case 'no existe este usuario':
                      this.setState({ errorValid: { error: true, message: data.loginUser.token } });
                      break;
                  default:
                      this.setState({ errorValid: { error: false, message: null } });
                      localStorage.setItem('tokenUser', data.loginUser.token);
                      this.props.refetch().then(() => this.props.history.push('/'));
                      break;
              }
            });
        }else{
            this.setState({ errorValid: { error: true, message:"campos vacíos" } });
        }
    }

    onChange = e => this.setState({ usuario: { ...this.state.usuario, [e.target.name]: e.target.value } });

    closeError = () => this.setState({errorValid:{error:false}});

    render() {
        const  {correo, contrasena } = this.state.usuario;
        return (
            <TemplateLayout pathUrl="login" session={this.props.session}>
                <Helmet>
                    <title>login usuario</title>
                </Helmet>
                <div className='container'>
                    <div className='col-sm-8 col-lg-5 mx-auto form_signin'>
                        <h1 id="titulo" className="h3 mb-3 font-weight-normal text-center">Inicio de session</h1>
                        <Mutation mutation={LOGIN_USER}  variables={{correo,contrasena}}>
                            {(loginUser, { loading, error, data }) => {
                                if(error) return error;
                                loading ? this.state.btnSubmit = 'Ingresando...' : this.state.btnSubmit = 'Ingresar';
                                return (
                                    <form className="" onSubmit={e => this.handleSubmit(e, loginUser)}>

                                        <MessageFlash
                                            errorValid={this.state.errorValid}
                                            closeError={this.closeError}
                                        />

                                        <input
                                            type="email"
                                            className="form-control margintb"
                                            name="correo"
                                            placeholder="correo"
                                            onChange={this.onChange}
                                        />

                                        <input
                                            type="text"
                                            className="form-control margintb"
                                            name="contrasena"
                                            placeholder="contraseña"
                                            onChange={this.onChange}
                                        />

                                        <button className="btn btn-lg btn-primary btn-block " type="submit">{this.state.btnSubmit}</button>
                                        <Link className="link_none" to={`/new_usuario`}>
                                            Registrarme
                                        </Link>
                                        <p className="mt-5 mb-3 text-muted"> AppReact©node-2019</p>
                                    </form>
                                );
                            }}
                        </Mutation>
                    </div>
                </div>
            </TemplateLayout>
        );
    }
}

export default Login;