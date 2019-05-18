import React, { Component } from 'react';
import { NEW_USER } from '../../graphql_client/mutation';
import { Mutation } from 'react-apollo';
import MessageFlash from '../utils/messageflash';
import { ImageUrlUpload, ImageUploadValid } from '../utils';

class Form extends  Component {

  constructor(props) {
    super(props);
		this.state = {
      admin: true,
      aux:false,
			user:{
				nombres:'',
				apellidos:'',
				correo:'',
				contrasena:'',
				valid_contrasena:'',
				roles:'',
				imageUrl:''
			},
			errorValid:{
        error:false,
        message:''
			}
		};
  };

	closeError = () => this.setState({errorValid:{error:false}});

	onChange = e => this.setState({ user: { ...this.state.user, [e.target.id]:e.target.value } });

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

	onCompleted = () => this.props.history.push('/');

	stateErrorValid = message => {
		this.setState({
			errorValid:{
				error:true,
				message
			}
		});
	}

	Cargarfileimg = image => {
    ImageUrlUpload(image)
      .then((objUpload) => {
        if(objUpload.state){
        	this.setState({
        	  user: {...this.state.user, imageUrl:objUpload.imageUrlUpload },
        		errorValid:{
        			error:false,
        			message:''
        		}
        	});
        }else{
    			this.setState({
    				user: {...this.state.user, imageUrl:'' },
    				errorValid:{
    					error:true,
    					message:objUpload.message
    				}
    			});
        }
      })
	};

	onSubmit = (e, newUser) => {
		e.preventDefault();
		const file = ImageUploadValid(e.target[0].files[0]);
		const { nombres, apellidos, correo, contrasena, valid_contrasena, roles } = this.state.user;
		if (nombres !== '' && apellidos !== '' && correo !== '' && contrasena !== '' && roles !== ''){
			if(contrasena === valid_contrasena) {
				newUser({ variables: { user:{nombres, apellidos, correo, contrasena, roles, file}} })
					.then(res => {
						switch (res.data.newUser.state){
							case true:
								this.onCompleted();
								break;
							case false:
								this.stateErrorValid(res.data.newUser.message);
								break;
						}
					})
					.catch(error => console.log('error_newUser',error));
			}else{
				this.stateErrorValid('las constraseñas no coinciden');
			};
		}else{
			this.stateErrorValid('campos vacíos');
		};
	}

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

            <MessageFlash
            	errorValid={this.state.errorValid}
              closeError={this.closeError}
            />
						<div className="form-group">
								<input
									type="text"
									className="form-control"
									id="nombres"
									placeholder="Nombres"
									onChange={ this.onChange }
									/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="apellidos"
								placeholder="Apellidos"
								onChange={this.onChange}
								/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="correo"
								placeholder="Correo"
								onChange={this.onChange}
								/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="contrasena"
								placeholder="Contraseña"
								onChange={this.onChange}
								/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="valid_contrasena"
								placeholder="Repetir Contraseña"
								onChange={this.onChange}
								/>
						</div>
						<div className="form-group">
							<select
								className="form-control"
								id="roles"
								placeholder="Permisos"
								onChange={this.onChange}
							>
								<option value={''}>Permisos</option>
								<option value={1}>Administrador</option>
								<option value={2}>Cliente</option>
								<option value={3}>Usuario Prueba</option>
							</select>
						</div>

          <input
            name="admin"
            type="checkbox"
            checked={this.state.admin}
            onChange={this.handleInputChange} />
          <input
            name="aux"
            type="checkbox"
            checked={this.state.aux}
            onChange={this.handleInputChange} />

						<button className="btn btn-lg btn-success btn-block " type="submit">
						{ loading ? 'Registrarme...' : 'Registrarme'}
						</button>
						<p className="mt-5 mb-3 text-muted"> cristiancaxi@gmail.com©node-2019</p>
					</form>
				)}
			</Mutation>
    );
  }
}
export default Form;