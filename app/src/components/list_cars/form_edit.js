import React, { Component } from 'react';
import { EDIT_CAR } from '../../graphql_client/mutations/mutationCar';
import { Mutation } from 'react-apollo';
import MessageFlash from '../utils/messageflash';
import { ImageUrlUpload, ImageUploadValid, SizeImageCar } from '../utils';

class FormEdit extends  Component {

  constructor(props) {
    super(props);
	  this.state = {
		  car: {
			  placa: '',
			  modelo: '',
			  tipo: '',
			  marca: '',
			  propietario: '',
			  documento: '',
			  detalle: '',
			  fecha: '',
			  imageUrl: ''
		  },
		  errorValid: {
			  error: false,
			  message: ''
		  }
	  };
	}

	closeError = () => this.setState({errorValid:{error:false}});

	onChange = e => this.setState({ car: { ...this.state.car, [e.target.name]: e.target.value } });
7
	handleChange = date => this.setState({ car: { ...this.state.car, fecha: date } });

	stateErrorValid = message => {
		this.setState({ errorValid:{ error:true, message } });
		const { x, y }  = document.getElementById('div_msn_error').getBoundingClientRect();
		window.scrollTo(x, y);
	};

	Cargarfileimg = image => {
		ImageUrlUpload(image)
			.then((objUpload) => {
				if (objUpload.state) {
					this.setState({
						car: { ...this.state.car, imageUrl: objUpload.imageUrlUpload },
						errorValid: { error: false, message: '' }
					});
				} else {
					this.setState({
						car: { ...this.state.car, imageUrl: '' },
						errorValid: { error: true, message: objUpload.message }
					});
				}
			})
	};

	onSubmit = (e, editCar, refetch) => {
		e.preventDefault();
		const
			file = ImageUploadValid(e.target[0].files[0]),
			placa = document.getElementById('placa').value,
			modelo = document.getElementById('modelo').value,
			tipo = document.getElementById('tipo').value,
			marca = document.getElementById('marca').value,
			propietario = document.getElementById('propietario').value,
			documento = document.getElementById('documento').value,
			detalle = document.getElementById('detalle').value,
			fecha = document.getElementById('fecha').value,
			imageUrl = document.getElementById('imageCar').src;

		if(placa !== '' && modelo !== '' && tipo !== '' && marca !== '' && propietario !== '' && documento !== '' && detalle !== '' && fecha !== '') {
			editCar({ variables: { car: { placa, modelo, tipo, marca, propietario, documento, detalle, fecha, file, imageUrl } } })
				.then(carBD => {
					console.log('carBD', carBD)
					refetch().then(() => {
						document.getElementById('placa').value = '';
						document.getElementById('modelo').value = '';
						document.getElementById('tipo').value = '';
						document.getElementById('marca').value = '';
						document.getElementById('propietario').value = '';
						document.getElementById('documento').value = '';
						document.getElementById('detalle').value = '';
						document.getElementById('fecha').value = '';
						document.getElementById('imageUser').src = 'public/assets/img_app/car.png';
						this.props.closeModal();
					});
				})
				.catch(error => console.log('*** Error_GRAPHQL_EDIT_CAR',error))
		} else {
			this.stateErrorValid('empty fields');
		}
	};

  render(){
	  console.log('this.props.car.placa',this.props.car);
		if(!this.props.modal){
			this.state.car.imageUrl = false
		}
		if(this.props.car){
			document.getElementById('placa').value = this.props.car.placa;
			document.getElementById('modelo').value = this.props.car.modelo;
			document.getElementById('tipo').value = this.props.car.tipo;
			document.getElementById('marca').value = this.props.car.marca;
			document.getElementById('propietario').value = this.props.car.propietario;
			document.getElementById('documento').value = this.props.car.documento;
			document.getElementById('detalle').value = this.props.car.detalle;
			document.getElementById('fecha').value = this.props.car.fecha;
			document.getElementById('imageCar').src = SizeImageCar(this.props.car.imageUrl,'sx');
		}
    return(
			<Mutation mutation={EDIT_CAR } >
				{(editCar, { loading }) => (
					<form onSubmit={e => this.onSubmit(e, editCar, this.props.refetch, this.props.closeModal)}>
						<div className="custom-input-file text-center pb-3" title="subir imagen">
							<div className="pb-1">Car image</div>
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
									id='imageCar'
									src={this.state.car.imageUrl || SizeImageCar(String(this.props.car.imageUrl),'md')}
									className="img-responsive img-thumbnail center-block" 
									width="300" 
									height="200"
								/>
							</span>
						</div>

						<MessageFlash errorValid={this.state.errorValid} closeError={this.closeError} />

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="placa"
								id="placa"
								disabled
								onKeyUp={e => e.target.value = e.target.value.toUpperCase()}
								defaultValue={this.props.car.placa}
							/>
						</div>

						<div className="form-group">
							<select
								className="form-control"
								name='modelo'
								id='modelo'
							>
								<option value={this.props.car.modelo}>{this.props.car.modelo}</option>
								<option value="1990">1990</option>
								<option value="1991">1991</option>
								<option value="1992">1992</option>
								<option value="1993">1993</option>
								<option value="1994">1994</option>
								<option value="1995">1995</option>
								<option value="1996">1996</option>
								<option value="1997">1997</option>
								<option value="1998">1998</option>
								<option value="1999">1999</option>
								<option value="2000">2000</option>
								<option value="2001">2001</option>
								<option value="2002">2002</option>
								<option value="2003">2003</option>
								<option value="2004">2004</option>
								<option value="2005">2005</option>
								<option value="2004">2006</option>
								<option value="2004">2007</option>
								<option value="2004">2008</option>
								<option value="2004">2009</option>
								<option value="2004">2010</option>
								<option value="2004">2011</option>
								<option value="2004">2012</option>
								<option value="2004">2013</option>
								<option value="2004">2014</option>
								<option value="2004">2015</option>
								<option value="2004">2016</option>
								<option value="2004">2018</option>
								<option value="2004">2019</option>
							</select>
						</div>

						<div className="form-group">
							<select
								className="form-control"
								name='tipo'
								id='tipo'
							>
								<option value={this.props.car.tipo}>{this.props.car.tipo}</option>
								<option value="PARTICULAR">particular</option>
								<option value="PUBLICO">publico</option>
							</select>
						</div>

						<div className="form-group">
							<select
								className="form-control"
								id="marca"
								name='marca'
							>
								<option value={this.props.car.marca}>{this.props.car.marca}</option>
								<option value="RENAULT">renault</option>
								<option value="MAZDA">mazda</option>
								<option value="BMW">bmw</option>
								<option value="TOYOTA">toyota</option>
							</select>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="propietario"
								id="propietario"
								defaultValue={this.props.car.propietario}
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="documento"
								id="documento"
								defaultValue={this.props.car.documento}
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="detalle"
								id="detalle"
								defaultValue={this.props.car.detalle}
							/>
						</div>

						<div className="form-group">
							<div className="">
								<input
									id="fecha"
									name="fecha"
									className="form-control"
									type="text"
									defaultValue={this.props.car.fecha}
								/>
							</div>
						</div>

						<button className="btn btn-lg btn-success btn-block " type="submit">
							{loading ? 'loading...' : 'update car'}
						</button>

						<p className="mt-5 mb-3 text-muted"> ©node-2019</p>
					</form>
				)}
			</Mutation>
    );
  }
}
export default FormEdit;
