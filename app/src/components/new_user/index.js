import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import TemplateLayout from '../templateLayout';
import Form from './form';

class NewUsuario extends Component {
	constructor(props) {
		super(props);
	};

	render(){
		return(
			<TemplateLayout session={this.props.session}>
				<Helmet>
					<title>Nuevo Usuario</title>
				</Helmet>
				<div className='container'>
					<div className='col-sm-8 col-lg-5 mx-auto form_signin'>
						<h1 id="titulo" className="h3 mb-3 font-weight-normal text-center">Registrarme</h1>
						<Form history={this.props.history}/>
					</div>
				</div>
			</TemplateLayout>
		);
	}
};

export default NewUsuario;
