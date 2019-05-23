import React, { Component } from 'react';
import { CHAT_USERS } from '../../graphql_client/queries/queryUser';
import { Query } from 'react-apollo';
import Form from './form';

class Chat extends Component {

	constructor(props){
		super(props);
	};

  componentWillMount = () => {};

  componentDidMount = () => {};

	render(){
		return(
      <Query query={CHAT_USERS}>
			{({loading,error,data,subscribeToMore}) => { 
				console.log('data.chatUsers',data.chatUsers)
				return <Form
					chatUsers={data.chatUsers || [] }
					session={this.props.session}
					subscribeToMore={subscribeToMore}
				/>
			}}
			</Query>
		);
	};
};
export default Chat;



