import React, { Component } from 'react';
import { NEW_CAR } from '../../graphql_client/mutations/mutationCar';
import { Mutation } from 'react-apollo';
import MessageFlash from '../utils/messageflash';
import { ImageUrlUpload, ImageUploadValid } from '../utils';
import DatePicker from "react-datepicker";

class Form extends  Component {

  constructor(props) {
    super(props);
		this.state = {
			car:{
				placa:'',
				modelo:'',
				tipo:'',
				marca:'',
				propietario:'',
				documento:'',
				detalle: '',
				fecha: new Date(),
				imageUrl:''
			},
			errorValid:{
				error:false,
				message:''
			}
		};
  };

	closeError = () => this.setState({errorValid:{error:false}});

	onChange = e => this.setState({ car: { ...this.state.car, [e.target.name]:e.target.value } });

	handleChange = date => this.setState({ car: { ...this.state.car, fecha: date }});

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
        	  car: { ...this.state.car, imageUrl:objUpload.imageUrlUpload },
        		errorValid:{ error:false,	message:'' }
        	});
        }else{
			this.setState({
				car: {...this.state.car, imageUrl:'' },
				errorValid:{ error:true, message:objUpload.message }
			});
        }
      })
	};

	onSubmit = (e, newCar) => {
		e.preventDefault();
		const file = ImageUploadValid(e.target[0].files[0]);
		const { placa, modelo, tipo, marca, propietario, documento, detalle, fecha } = this.state.car;
		if (placa !== '' && modelo !== '' && tipo !== '' && marca !== '' && propietario !== '' && documento !== '' && detalle !== '' && fecha !== '' ){
			newCar({ variables: { car: { placa, modelo, tipo, marca, propietario, documento, detalle, fecha, file}} })
				.then(({data}) => {
					if(data.newCar.state){
						this.props.refetch()
							.then(() => this.props.history.push('/list_cars'))
							.catch(error => console.log('*** Error_refetch', error));
					}else{
						this.stateErrorValid(data.newCar.message)
					}
				})
				.catch(error => console.log('error_newCar',error));
		}else{
			this.stateErrorValid('campos vacíos');
		}
	};

  render(){
    return(
			<Mutation mutation={NEW_CAR} >
				{(newCar, { loading, error,data }) => (
					<form onSubmit={e => this.onSubmit(e, newCar)}>
						<div className="custom-input-file text-center pb-3" title="subir imagen">
							<div className="pb-1">car picture</div>
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
									src={this.state.car.imageUrl || "public/assets/img_app/car.png"}
									className="img-responsive img-thumbnail center-block " width="300" height="200"
								/>
							</span>
						</div>

						<MessageFlash errorValid={this.state.errorValid} closeError={this.closeError} />

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="placa"
								placeholder="Placa"
								onKeyUp={e => e.target.value = e.target.value.toUpperCase()}
								onChange={this.onChange}
							/>
						</div>

						<div className="form-group">
							<select
								className="form-control"
								name='modelo'
								onChange={this.onChange}
							>
								<option value="">modelo</option>
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
								onChange={this.onChange}
							>
								<option value="">tipo</option>
								<option value="PARTICULAR">particular</option>
								<option value="PUBLICO">publico</option>
							</select>
						</div>

						<div className="form-group">
							<select
								className="form-control"
								id="marca"
								name='marca'
								onChange={this.onChange}
							>
								<option value="">marca</option>
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
								placeholder="Propietario"
								onChange={this.onChange}
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="documento"
								placeholder="Documento"
								onChange={this.onChange}
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="detalle"
								placeholder="Detalle"
								onChange={this.onChange}
							/>
						</div>

						<div className="form-group">
							<div className="mx-auto">
								<DatePicker
									selected={this.state.car.fecha}
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<button className="btn btn-lg btn-primary btn-block " type="submit">
							{loading ? 'Loading...' : 'Create new mtto car'}
						</button>

						<p className="mt-5 mb-3 text-muted"> <i className="fab fa-react"></i> <i className="fab fa-node-js"></i> - 2019</p>
					</form>
				)}
			</Mutation>
    );
  }
}
export default Form;