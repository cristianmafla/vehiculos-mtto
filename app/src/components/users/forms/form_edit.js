
import React, { Component } from 'react';
import { EDIT_USER } from '../../../graphql_client/mutations/mutationUser';
import { Mutation } from 'react-apollo';
import MessageFlash from '../../utils/messageflash';
import { ImageUrlUpload, ImageUploadValid,SizeImageUser } from '../../utils';

class FormEdit extends  Component {

  constructor(props) {
    super(props);
		this.state = {
			user:{
				name:'',
				lastname:'',
				email: '',
				roles:[],
				imageUrl: false
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
				checked: false
			}
		};
	}

	componentWillMount = () => {
	};

	componentDidMount = () => {
	};

	closeError = () => this.setState({errorValid:{error:false}});

	onChange = e => this.setState({ user: { ...this.state.user, [e.target.name]:e.target.value } });
7
	handleCheked = ({ target: { checked, name } }) => this.setState({[name]: {name,checked}});

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
        }
      })
	};

	rolesUser = roles => (
		roles
			? roles.map((rol, key) => {
				switch (rol.name) {
					case 'rol_admon':
						name = 'Administrator'
						break;
					case 'rol_client':
						name = 'Client'
						break;
					case 'rol_invited':
						name = 'Invite';
						break;
					default:
						name = '';
						break;
				};
				return (
					<div key={key} className="custom-control custom-switch">
							<input
								id={rol.name}
								name={rol.name}
								type="checkbox"
								className="custom-control-input"
								defaultChecked={rol.checked}
							/>
						<label className="custom-control-label" htmlFor={rol.name}>{name}</label>
					</div>
				);
			}) : ''
	);


	onSubmit = (e, editUser, refetch) => {
		e.preventDefault();
		const
			file = ImageUploadValid(e.target[0].files[0]),
			name = document.getElementById('name').value,
			lastname = document.getElementById('lastname').value,
			email = document.getElementById('email').value,
			imageUrl = document.getElementById('imageUser').src,
			roles = [{
				name: 'rol_admon',
				checked: document.getElementById('rol_admon').checked
			},
			{
				name: 'rol_client',
				checked: document.getElementById('rol_client').checked
			},
			{
				name: 'rol_invited',
				checked: document.getElementById('rol_invited').checked
			}];

		let rolvalid = !(roles[0].checked === false && roles[1].checked === false && roles[2].checked === false);
		if (name !== '' && lastname !== '' && email !== '' && rolvalid !== false) {
			editUser({ variables: { user: { name, lastname, email, imageUrl, roles, file } } })
				.then(userBD => {
					console.log('userBD',userBD)
					refetch().then(() => {
						document.getElementById('name').value = '';
						document.getElementById('lastname').value = '';
						document.getElementById('email').value = '';
						document.getElementById('imageUser').src = 'public/assets/images_locals/profile.png';
						this.props.closeModal();
					});
				})
				.catch(error => console.log('*** Error_GRAPHQL_EDIT_USER',error))
		} else {
			this.stateErrorValid('empty fields');
		}
	};

  render(){
		if(!this.props.modal){
			this.state.user.imageUrl = false
		}
		if(this.props.user){
			document.getElementById('name').value = this.props.user.name;
			document.getElementById('lastname').value = this.props.user.lastname;
			document.getElementById('email').value = this.props.user.email;
			document.getElementById('imageUser').src = SizeImageUser(this.props.user.imageUrl,'sx');
		}
    return(
			<Mutation mutation={EDIT_USER } >
				{(editUser, { loading }) => (
					<form onSubmit={e => this.onSubmit(e, editUser, this.props.refetch)}>
						<div className="custom-input-file text-center pb-3" title="subir imagen">
							<div className="pb-1">Profile image</div>
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
									id='imageUser'
									src={this.state.user.imageUrl || SizeImageUser(String(this.props.user.imageUrl),'md')}
									className="img-responsive img-thumbnail center-block rounded-circle" width="170"
								/>
							</span>
						</div>

						<MessageFlash errorValid={this.state.errorValid} closeError={this.closeError} />

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								placeholder="Name"
								defaultValue={this.props.user.name}
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="lastname"
								name="lastname"
								placeholder="Lastname"
								defaultValue={this.props.user.lastname}
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="email"
								name="email"
								placeholder="Email"
								defaultValue={this.props.user.email}
							/>
						</div>

						<div className="form-group div_checks_newuser">
							{this.rolesUser(this.props.user.roles)}
						</div>

						<button className="btn btn-lg btn-success btn-block " type="submit">
							{loading ? 'loading...' : 'update user'}
						</button>

						<p className="mt-5 mb-3 text-muted"> ©node-2019</p>
					</form>
				)}
			</Mutation>
    );
  }
}
export default FormEdit;
