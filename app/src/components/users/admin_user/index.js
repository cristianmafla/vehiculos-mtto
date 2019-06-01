import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import { TOTAL_USERS } from '../../../graphql_client/queries/queryUser';
import TemplateLayout from '../../templateLayout';
import ListUsers from './listUsers';

class AdminUsers extends Component {
	constructor(props){
		super(props);
	}

  componentWillMount = () => {

  };

  componentDidMount = () => {

  };

	render(){
		return(
			<TemplateLayout session={this.props.session}>
				<Helmet><title>Admin Users</title></Helmet>
				<div className="col-sm-8 col-lg-9 mx-auto form">
          <h1 className="h3 mb-3 font-weight-normal text-center">User administration</h1>
					<Query query={TOTAL_USERS} pollInterval={2500}>
            {({loading,error,data,refetch}) => {
              if(loading) return 'loading...';
              if(error) return console.log('error_GRAPHQL_TOTAL_USERS',error);
							return(
								<ListUsers
										users={data.totalUsers || []}
										refetch={refetch}
										session={this.props.session}
										history={this.props.history}
										stm={this.props.stm}
									/>
							);
            }}
          </Query>
					<div id="example-table"></div>
				</div>
			</TemplateLayout>
		);
	}
};
export default AdminUsers;




