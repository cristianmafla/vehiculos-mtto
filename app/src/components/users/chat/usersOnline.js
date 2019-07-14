import React, { Component, Fragment } from 'react';
import { SUB_USER_ONLINE } from '../../../graphql_client/subscription/subscriptionUser';
import { connect } from 'react-redux';
import ActionUsersOnline from '../../../redux_store/actions/actionUsersOnline';
import { SizeImageUser } from '../../utils';

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
        const emailsUsers = subscriptionData.data.subUsersOnline.user.map(user => user.email);
        if (!subscriptionData.data) return prev;
        if (subscriptionData.data.subUsersOnline.update || subscriptionData.data.subUsersOnline.deleted){
          this.props.ActionUsersOnline([]);
          if(emailsUsers.indexOf(this.props.session.email) < 0){
            localStorage.setItem('tokenUser','null')
            location.replace("/");
          }
        }
        let set = new Set([...subscriptionData.data.subUsersOnline.user].map(JSON.stringify))
        this.props.ActionUsersOnline(Array.from(set).map(JSON.parse));
		  },
	  });
  };

	render(){
		return(
			<div className="div_online_user pt-1 pb-1 mt-2">
				{this.props.UsersOnline.length > 0
          ? this.props.UsersOnline.map((user, key) => {
            if(this.props.session.email != user.email){
              return(
                <Fragment key={key}>
                  <img src={SizeImageUser(user.imageUrl, 'sx')} />
                  <div className="chat_user_online"></div>
                </Fragment>
              );
            }
          })
          : this.props.usersOnline.map((user, key) => {
            if(this.props.session.email != user.email){
              return(
                <Fragment key={key}>
                  <img src={SizeImageUser(user.imageUrl, 'sx')} />
                  <div className="chat_user_online"></div>
                </Fragment>
              );
            }
        })}
			</div>
		);
  }

}

const mapStateToProps = state => ({
  UsersOnline: state.ActionUsersOnline,
});

const mapDispatchToProps = {
  ActionUsersOnline
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersOnline);