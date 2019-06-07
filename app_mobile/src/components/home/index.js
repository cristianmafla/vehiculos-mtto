import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Query,graphql } from 'react-apollo';
import {ANYQUERY} from '../../graphql_client/queries';

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentWillMount = () => {};

  componentDidMount = () => {};

	render(){
		return (
			<Query query={ANYQUERY} variables={{}}>
				{({ loading, data }) => (
					<Text>*** {loading ? 'cargando...' : ''} {data ? data.anyQuery : 'Error: SERVER GRAPHQL'} ***</Text>
				)}
			</Query>
		);
	}
}

export default Home;

