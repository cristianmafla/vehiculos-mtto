import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import TemplateLayout from '../../templateLayout';

class Municipios extends Component {
	constructor(props){
		super(props);
	};

  componentWillMount = () => {

  };

  componentDidMount = () => {

  };

	render(){
		return(
			<TemplateLayout session={this.props.session}>
				<Helmet><title>colombia municipios</title></Helmet>
				<div className="col-sm-8 col-lg-5 mx-auto form">
					<h1 className="h3 mb-3 font-weight-normal text-center">Municipios</h1>
				</div>
			</TemplateLayout>
		);
	};
};
export default Municipios;




