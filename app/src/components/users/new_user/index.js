import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import TemplateLayout from '../../templateLayout';
import Form from './form';

class NewUsuario extends Component {
	constructor(props) {
		super(props);
	};

	render(){
		return(
			<TemplateLayout session={this.props.session}>
				<Helmet>
					<title>create an account</title>
				</Helmet>
				<div className='container'>
					<div className='col-sm-8 col-lg-5 mx-auto form'>
						<h1 id="titulo" className="h3 mb-3 font-weight-normal text-center">Create your personal account</h1>
						<Form history={this.props.history} refetch={this.props.refetch}/>
					</div>
				</div>
			</TemplateLayout>
		);
	}
};

export default NewUsuario;
