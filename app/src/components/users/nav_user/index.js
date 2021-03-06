import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SUB_USER_PROFILE } from '../../../graphql_client/subscription/subscriptionUser';
import ModalChat from '../../modal';
import Chat from '../chat';
import ModalUserProfile from '../../modal';
import ModalNotification from '../../modal';
import { connect } from 'react-redux';
import ActionNotificationChat from '../../../redux_store/actions/actionNotificationChat';
import { SizeImageUser } from '../../utils';

class NavUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      internet:false,
      modalUser: false,
      modalChatUser:false,
      modalNotification:false,
      user:{},
      imageUrl:""
    };
  }

  componentWillMount = () => {

  };

  componentDidMount = () => {
    this.props.subscribeToMore({
      document: SUB_USER_PROFILE,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        console.log('subscriptionData', subscriptionData.data.subUserProfile);
        this.setState({ user: subscriptionData.data.subUserProfile})
      },
    });


  };

  ViewModalUser = () => this.setState({ modalUser: true });

  ModalUser = user => {
    if(user){
      return (
        <ModalUserProfile title={`${user.name} ${user.lastname}`} visibility={this.state.modalUser} size="" closeModal={this.closeModal}>
          <img src={SizeImageUser(user.imageUrl,'md')} className="img-responsive img-thumbnail center-block " width="170"/>
          {user.name} {user.lastname}
        </ModalUserProfile>
      );
    }
  };

  ViewModalChatUser = () => {
    this.props.ActionNotificationChat('');
    this.setState({ modalChatUser:true });
  };

  ModalChatUser = user => {
    if(user){
      return (
        <ModalChat title="Chat User" visibility={this.state.modalChatUser} size="" closeModal={this.closeModal}>
          <Chat session={user} visibility={this.state.modalChatUser}/>
        </ModalChat>
      );
    }
  };

  ViewModaNotificationl = () => this.setState({ modalNotification: true });

  ModalNotification = user => {
    if(user){
      return (
        <ModalNotification title="User Notification" visibility={this.state.modalNotification} size="" closeModal={this.closeModal}>
        </ModalNotification>
      );
    }
  };

  closeModal = () => this.setState({ modalChatUser:false, modalUser:false, modalNotification:false });

	itemsUsuario = user => {
	  if(user) {
  	  return (
        <Fragment>
          <div className="div_msn_notification">
            <div className={this.props.NotificationChat}><i></i></div>
            <i onClick={() => this.ViewModalChatUser()} className="far fa-comment-dots" title="chat"></i>
          </div>
          <div className="div_nav_notification">
            <div className="div_count_notification"><i></i></div>
            <i onClick={() => this.ViewModaNotificationl()} className="far fa-bell" title="notification"></i>
          </div>
        </Fragment>
  	  );
	  }
  };

	avatarUsuario = user => {
	  if(user){
      if(user.email == this.state.user.email){
        user = this.state.user;
      }
	    return(
        <Fragment>
          <div className="div_nav_img_user">
            <img
              onClick={() => this.ViewModalUser()}
              src={user.imageUrl === 'false' ? "public/assets/images_locals/profile.png" : SizeImageUser(user.imageUrl,'sx') }
              alt={user.name}
              className="img_nav_user"
            />
          </div>
        </Fragment>
	    )
	  }else{
      return(
        <div className="div_nav_img_user">
          <Link to={'/new_user'}>
            <img
              src="public/assets/images_locals/profile.png"
              alt=""
              className="img_nav_user_off"
            />
          </Link>
        </div>
      );
    }
  };

  render(){
    return(
      <div className="nav_user">
        {this.itemsUsuario(this.props.session || false)}
        {this.avatarUsuario(this.props.session || false)}
        {this.ModalUser(this.props.session || false)}
        {this.ModalChatUser(this.props.session || false)}
        {this.ModalNotification(this.props.session || false)}
      </div>
    );
  }

}

const mapStateToProps = state => ({
  NotificationChat: state.ActionNotificationChat,
});

const mapDispatchToProps = {
  ActionNotificationChat
};

export default connect(mapStateToProps, mapDispatchToProps)(NavUser);