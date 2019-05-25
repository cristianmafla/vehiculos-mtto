import React, { Component, Fragment } from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import { Helmet } from './node_modules/react-helmet';
import TemplateLayout from '../templateLayout';

class plantilla_componente extends Component {
	constructor(props){
		super(props);
	}

  componentWillMount = () => {

  }

  componentDidMount = () => {

  }

	render(){
		return(
			<TemplateLayout session={this.props.session}>
				<Helmet><title>Plantilla_componente</title></Helmet>
				<div className="col-sm-8 col-lg-5 mx-auto form">
					<h1 className="h3 mb-3 font-weight-normal text-center">Plantilla_componente</h1>
				</div>
			</TemplateLayout>
		);
	}
};
export default plantilla_componente;




