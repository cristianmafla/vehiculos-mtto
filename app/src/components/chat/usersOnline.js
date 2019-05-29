import React, { Component, Fragment } from 'react';
import { SUB_USER_ONLINE } from '../../graphql_client/subscription/subscriptionUser';
import { connect } from 'react-redux';
import ActionUsersOnline from '../../redux_store/actions/actionUsersOnline';
import { SizeImageUser } from '../utils';

class UsersOnline extends Component {
	constructor(props){
		super(props);
	}

  componentWillMount = () => {

  }

  componentDidMount = () => {
	  this.props.subscribeToMore({
		  document: SUB_USER_ONLINE,
		  updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        if (subscriptionData.data.subUsersOnline.update){
          this.props.ActionUsersOnline([]);
        };
        console.log('USER_ONLINE subscription SUB_USER_ONLINE', subscriptionData);
        let set = new Set([...this.props.UsersOnline, ...subscriptionData.data.subUsersOnline.user].map(JSON.stringify))
        this.props.ActionUsersOnline(Array.from(set).map(JSON.parse));
		  },
	  });
  };

	render(){
		return(
			<div className="div_online_user pt-1 pb-1 mt-2">
				{
          this.props.UsersOnline.length > 0
            ? this.props.UsersOnline.map((user, key) => {
							if(this.props.session.email != user.email){
								return <img key={key} src={SizeImageUser(user.imageUrl, 'sx')} />
							};
						})
            : this.props.usersOnline.map((user, key) => {
							if(this.props.session.email != user.email){
								return <img key={key} src={SizeImageUser(user.imageUrl, 'sx')} />
              };
            })
  }
			</div>
		);
  };

};

const mapStateToProps = state => ({
  UsersOnline: state.ActionUsersOnline,
});

const mapDispatchToProps = {
  ActionUsersOnline
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersOnline);