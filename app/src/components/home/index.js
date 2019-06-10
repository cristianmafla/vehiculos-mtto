import React,{Component, Fragment} from 'react';
import { Query } from 'react-apollo';
import {ANYQUERY} from '../../graphql_client/queries';
import { Helmet } from 'react-helmet';
import TemplateLayout from '../templateLayout';
import { PruebaSounds,sounds } from '../utils/sounds';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentWillMount = () => {};

  componentDidMount = () => {};

	render(){
		return(
			<TemplateLayout session={this.props.session}>
				<Helmet>
					<title>home</title>
				</Helmet>
				<div className="col-sm-8 col-lg-5 mx-auto form">
					<h1 className="h3 mb-3 font-weight-normal text-center">HOME</h1>
					<Query query={ANYQUERY} variables={{}}>
					{({ loading, data }) => (
						<Fragment>
							<h4>*** {loading ? 'cargando...' : ''} {data ? data.anyQuery : 'Error: SERVER GRAPHQL'} ***</h4>
							<h5>SOUNDS :</h5>
								{sounds.map((sound,key) => {
									return(
										<div key={key} className="pt-2 pb-2">
											<button type="button" className="btn btn-outline-dark btn-block" onClick={() => PruebaSounds(sound.name)}>{sound.name}</button>
										</div>
									)
								})}
						</Fragment>
					)}
					</Query>

				</div>
			</TemplateLayout>
		);
	}
}

export default Home;

