import React,{Component} from 'react';
import { Query } from 'react-apollo';
import {ANYQUERY} from '../../graphql_client/queries';
import { Helmet } from 'react-helmet';
import TemplateLayout from '../templateLayout';

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			visibility:false
		};
	};

	componentWillMount = () => {};

	componentDidMount = () => {};

	openModal = () => this.setState({visibility:true});

	closeModal = () => this.setState({visibility:false});

	render(){
		return(
			<Query query={ANYQUERY} variables={{}}>
			{({ error, loading, data }) => {
				return(
					<TemplateLayout session={this.props.session}>
						<Helmet>
							<title>home</title>
						</Helmet>
						<div className="col-sm-8 col-lg-5 mx-auto form_signin">
							<h1 className="h3 mb-3 font-weight-normal text-center">HOME.</h1>
							<h4>*** {loading ? 'cargando...' : ''} {data ? data.anyQuery : 'Error verifique su conexion a GRAPHQL'} ***</h4>
						</div>
					</TemplateLayout>
				);
			}}
			</Query>
		);
	};
};

export default Home;

