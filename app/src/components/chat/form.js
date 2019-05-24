import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { SUB_CHAT_USER } from '../../graphql_client/subscription/subscriptionUser';
import { NEW_CHAT_USER } from '../../graphql_client/mutations/mutationUser';
import { connect } from 'react-redux';
import ActionChat from '../../redux_store/actions/actionchat';
import ActionNotificationChat from '../../redux_store/actions/actionNotificationChat';

class Form extends Component {

	constructor(props){
		super(props);
		this.state = {};
	};

  componentWillMount = () => {};


  componentDidMount = () => {
    console.log('this.props.chatUsers', this.props.chatUsers)
    this.props.subscribeToMore({
      document: SUB_CHAT_USER,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        this.updateQuerySubscribe(prev, subscriptionData);
        if (document.getElementById('list_msn')) {
          const
            scrltop = document.getElementById('list_msn').scrollTop,
            scrlh = document.getElementById('list_msn').scrollHeight;
          if (scrltop != scrlh) {
            document.getElementById('list_msn').scrollTop = document.getElementById('list_msn').scrollHeight;
          };
        };
        return { chatUsers: [...prev.chatUsers, subscriptionData.data.subChatUsers] };
      },
    });
  };

  updateQuerySubscribe = (prev, subscriptionData) => {
    const { message, user, date } = subscriptionData.data.subChatUsers;
    this.props.ActionChat([...prev.chatUsers, { user, message, date }]);
    if (user.email != this.props.session.email ) {
      this.props.ActionNotificationChat('div_msn_count_notification');
    }
  };

  listChatUser = () => (
    <div id="list_msn" className="list_msn">
      <ul className="list-group list-group-flush ul_chat">
        {this.props.chatMnsUsers.map((msn, key) => {
          if (msn.user.email === this.props.session.email) {
            return <li key={key} className="list-group-item mili">
              <div className="media float-right">
                <div className="usermsn float-right">
                  <div>{msn.message}</div>
                  <div className="float-right date_chat">{msn.date}</div>
                </div>
                <div className="">
                  <Link className="d-block" to={`#`}>
                    <img
                      src={msn.user.imageUrl || '../../assets/images_locals/profile.png'}
                      className="align-self-start ml-2 rounded-circle imgborder float-right"
                      title={msn.user.name}
                      alt={msn.user.name}
                      width="35"
                    />
                  </Link>
                </div>
              </div>
            </li>
          }else{
            return <li key={key} className="list-group-item mili">
              <div className="media">
                <div>
                  <Link className="d-block" to={`#`}>
                    <img
                      src={msn.user.imageUrl || '../../assets/images_locals/profile.png'}
                      className="align-self-start mr-2 rounded-circle imgborder"
                      title={msn.user.name}
                      alt={msn.user.name}
                      width="40"
                    />
                  </Link>
                </div>
                <div className="otherusermsn">
                  <div>{msn.message}</div>
                  <div className="date_chat">{msn.date}</div>
                </div>
              </div>
            </li>
          }
        })}
      </ul>
    </div>
  );

  onSubmit = (e,chatUser) => {
  	e.preventDefault();
    if(e.target[0].value != ''){
      chatUser({ variables: { user:this.props.session, message:e.target[0].value} });
    };
    e.target[0].value = '';
  };

	render(){
		return(
      <Fragment>
        {this.listChatUser()}
        <Mutation mutation={NEW_CHAT_USER}>
				{(chatUser,{ loading, error, data}) => (
    		  <form className="form-inline mt-2" onSubmit={e => this.onSubmit(e,chatUser)}>
    				<div className="input-group mb-3 w-100">
    				  <input type="text" className="form-control" placeholder="escribe un mensaje" aria-label="escribe un mensaje" aria-describedby="basic-addon2"/>
    				  <div className="input-group-append">
    				    <button className="btn btn-outline-secondary" type="submit" title="enviar">
    				    	<i className="far fa-paper-plane"></i>
    				    </button>
    				  </div>
    				</div>
    		  </form>
				)}
				</Mutation>
      </Fragment>
		);
  };

};
const mapStateToProps = state => ({
  chatMnsUsers: state.ActionChat,
});

const mapDispatchToProps = {
    ActionChat,
    ActionNotificationChat
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);



