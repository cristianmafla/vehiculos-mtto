import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import { PAGINATION_USERS } from '../../../graphql_client/queries/queryUser';
import TemplateLayout from '../../templateLayout';
import ListUsers from './listUsers';
import Pagination from '../pagination/pagination';

class AdminUsers extends Component {
  limit = 2;
	constructor(props){
		super(props);
		this.state = {
			pagination: {
				offset: 0,
				currentPage: 1
			},
    };
	}

  componentWillMount = () => {};

	componentDidMount = () => {};

	pagePrevious = () => {
		this.setState({
			pagination: {
        offset: this.state.pagination.offset - this.limit,
				currentPage: this.state.pagination.currentPage - 1
			}
		});
	}

	pageFallowing = () => {
		this.setState({
			pagination: {
        offset: this.state.pagination.offset + this.limit,
				currentPage: this.state.pagination.currentPage + 1
			}
		});
	}

  finalPage = totalUser => this.state.pagination.currentPage >= Math.ceil(Number(totalUser) / this.limit);
  
  onChangePag = page => {
    this.setState({
      pagination: {
				offset: page * this.limit,
        currentPage: page + 1
      }
    });
  };

	render(){
		return(
			<TemplateLayout session={this.props.session}>
				<Helmet><title>Admin Users</title></Helmet>
				<div className="col-sm-8 col-lg-9 mx-auto form">
          <h1 className="h3 mb-3 font-weight-normal text-center">User administration</h1>
					<Query query={PAGINATION_USERS} variables={{limit:this.limit,offset:this.state.pagination.offset}} pollInterval={2500}>
						{({loading,error,data,refetch}) => {
						if(loading) return 'loading...';
						if(error) return console.log('error_GRAPHQL_TOTAL_USERS',error);
							return(
								<Fragment>
									<ListUsers
										users={data.paginationUsers || []}
										refetch={refetch}
										session={this.props.session}
                    history={this.props.history}
                    currentPage={this.state.pagination.currentPage}
                    totalPages={Math.ceil(Number(data.totalUsers) / this.limit)}
									/>
									<Pagination
                    currentPage={this.state.pagination.currentPage}
                    previousPage={this.pagePrevious}
                    followingPage={this.pageFallowing}
                    onChangePag={this.onChangePag}
                    finalPages={this.finalPage(data.totalUsers)}
										totalPages={Math.ceil(Number(data.totalUsers) / this.limit)}
                  />
								</Fragment>
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




