import React, { Component } from 'react';
import { NEW_USER } from '../../graphql_client/mutations/mutationUser';
import { Mutation } from 'react-apollo';
import MessageFlash from '../utils/messageflash';
import { ImageUrlUpload, ImageUploadValid } from '../utils';

class Form extends  Component {

  constructor(props) {
    super(props);
		this.state = {
			user:{
				name:'',
				lastname:'',
				email:'',
				password:'',
				valid_password:'',
				roles:[],
				imageUrl:''
			},
			errorValid:{
        error:false,
        message:''
			},
			rol_admon:{
				name:'rol_admon',
				checked:false
			},
			rol_client:{
				name: 'rol_client',
				checked: false
			},
			rol_invited:{
				name: 'rol_invited',
				checked: true
			}
		};
  };

	closeError = () => this.setState({errorValid:{error:false}});

	onChange = e => this.setState({ user: { ...this.state.user, [e.target.name]:e.target.value } });
7
	handleCheked = ({ target: { checked, name } }) => this.setState({[name]: {name,checked}});

	onCompleted = () => this.props.history.push('/');

	stateErrorValid = message => {
		this.setState({ errorValid:{ error:true, message } });
		const { x, y }  = document.getElementById('div_msn_error').getBoundingClientRect();
		window.scrollTo(x, y);
	};

	Cargarfileimg = image => {
    ImageUrlUpload(image)
      .then((objUpload) => {
        if(objUpload.state){
        	this.setState({
        	  user: { ...this.state.user, imageUrl:objUpload.imageUrlUpload },
        		errorValid:{ error:false,	message:'' }
        	});
        }else{
    			this.setState({
    				user: {...this.state.user, imageUrl:'' },
    				errorValid:{ error:true, message:objUpload.message }
    			});
        };
      })
	};

	onSubmit = (e, newUser) => {
		e.preventDefault();
		const file = ImageUploadValid(e.target[0].files[0]);
		this.state.user.roles = [
			this.state.rol_admon,
			this.state.rol_client,
			this.state.rol_invited
		];
		const { name, lastname, email, password, valid_password, roles } = this.state.user;
		let rolvalid = !(roles[0].checked === false && roles[1].checked === false && roles[2].checked === false);
		if (name !== '' && lastname !== '' && email !== '' && password !== ''&& rolvalid !== false ){
			if (password === valid_password) {
				newUser({ variables: { user:{name, lastname, email, password, roles, file}} })
					.then(({data}) => data.newUser.state ? this.onCompleted() : this.stateErrorValid(data.newUser.message))
					.catch(error => console.log('error_newUser',error));
			}else{
				this.stateErrorValid('las constraseñas no coinciden');
			};
		}else{
			this.stateErrorValid('campos vacíos');
		};
	};

  render(){
    return(
			<Mutation mutation={NEW_USER } >
				{ (newUser,{ loading, error, data }) => (
					<form onSubmit={e => this.onSubmit(e, newUser)}>
            <div className="custom-input-file text-center pb-3" title="subir imagen">
            <div className="pb-1">Imagen de perfil</div>
                <input
                	type="file"
                	id="image"
                	name="image"
                	size="1"
                	className="input-file"
                	accept="image/*;capture=camera"
                	onChange={e => this.Cargarfileimg(e)}
              	/>
                <span className="">
                  <img
                  	src={this.state.user.imageUrl || "../../assets/images_locals/profile.png"}
                  	className="img-responsive img-thumbnail center-block rounded-circle" width="170"
                	/>
                </span>
            </div>

            <MessageFlash errorValid={this.state.errorValid} closeError={this.closeError} />

						<div className="form-group">
								<input
									type="text"
									className="form-control"
									name="name"
									placeholder="Nombres"
									onChange={ this.onChange }
									/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="lastname"
								placeholder="Apellidos"
								onChange={this.onChange}
								/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="email"
								placeholder="Correo"
								onChange={this.onChange}
								/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="password"
								placeholder="Contraseña"
								onChange={this.onChange}
								/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="valid_password"
								placeholder="Repetir Contraseña"
								onChange={this.onChange}
								/>
						</div>

						<div className="form-group div_checks_newuser">
							<label className="custom-control custom-checkbox">
								<input
									name="rol_admon"
									type="checkbox"
									className="custom-control-input"
									checked={this.state.rol_admon.checked}
									onChange={this.handleCheked} />
								<span className="custom-control-indicator"></span>
								<span className="custom-control-description">Administrador</span>
							</label>

							<label className="custom-control custom-checkbox">
								<input
									name="rol_client"
									type="checkbox"
									className="custom-control-input"
									checked={this.state.rol_client.checked}
									onChange={this.handleCheked} />
								<span className="custom-control-indicator"></span>
								<span className="custom-control-description">Cliente</span>
							</label>

							<label className="custom-control custom-checkbox">
								<input
									name="rol_invited"
									type="checkbox"
									className="custom-control-input"
									checked={this.state.rol_invited.checked}
									onChange={this.handleCheked} />
								<span className="custom-control-indicator"></span>
								<span className="custom-control-description">Invitado</span>
							</label>
						</div>

						<button className="btn btn-lg btn-primary btn-block " type="submit">
						{ loading ? 'Registrarme...' : 'Registrarme'}
						</button>

						<p className="mt-5 mb-3 text-muted"> ©node-2019</p>
					</form>
				)}
			</Mutation>
    );
  }
}
export default Form;