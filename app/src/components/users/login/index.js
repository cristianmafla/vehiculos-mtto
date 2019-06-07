import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import TemplateLayout from '../../templateLayout';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { LOGIN_USER } from '../../../graphql_client/mutations/mutationUser';
import MessageFlash from '../../utils/messageflash';
import GoogleLogin from './loginGoogle';
import FacebookLogin from './loginFacebook';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        user: {
            email: '',
            password: ''
        },
        errorValid:{
            error:false,
            message:''
        },
        btnSubmit:"Ingresar"
    };
  };

  onChange = e => this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } });

  closeError = () => this.setState({ errorValid:{error:false} });

  handleSubmit = (event, loginUser) => {
    event.preventDefault();
    const { email, password } = this.state.user;
    if (email !== '' && password !== '') {
      loginUser().then(({ data }) => {
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
              .then(() => this.props.history.push('/'))
              .catch(error => console.log('*** Error_refetch',error));
            break;
        };
      }).catch(error => console.log('*** Error_loginMutation',error));
    } else {
      this.setState({ errorValid: { error: true, message: "campos vacíos" } });
    };
  };

  errorValid = message => this.setState({ errorValid: { error: true, message } });

  render() {
    const  {email, password } = this.state.user;
    return (
      <TemplateLayout pathUrl="login" session={this.props.session}>
          <Helmet>
              <title>login usuario</title>
          </Helmet>
          <div className='container'>
            <div className='col-sm-8 col-lg-5 mx-auto form'>
              <h1 id="titulo" className="h3 mb-3 font-weight-normal text-center">Inicio de session</h1>
              <Mutation mutation={LOGIN_USER}  variables={{email,password}}>
                {(loginUser, { loading, error, data }) => {
                  if(error) return error;
                  loading ? this.state.btnSubmit = 'Ingresando...' : this.state.btnSubmit = 'Ingresar';
                  return (
                    <form className="" onSubmit={e => this.handleSubmit(e, loginUser)}>
                      <FacebookLogin history={this.props.history} refetch={this.props.refetch} errorValid={this.errorValid}/>
                      <GoogleLogin history={this.props.history} refetch={this.props.refetch} errorValid={this.errorValid}/>
                      <MessageFlash errorValid={this.state.errorValid} closeError={this.closeError}/>

                      <input
                          type="email"
                          className="form-control margintb"
                          name="email"
                          placeholder="correo"
                          onChange={this.onChange}
                      />

                      <input
                          type="text"
                          className="form-control margintb"
                          name="password"
                          placeholder="contraseña"
                          onChange={this.onChange}
                      />

                      <button className="btn btn-lg btn-primary btn-block " type="submit">{this.state.btnSubmit}</button>
                      <Link className="link_none" to={`/new_user`}>
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
  };
};

export default Login;