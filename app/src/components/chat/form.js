import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { USERS_ONLINE } from '../../graphql_client/queries/queryUser';
import { SUB_CHAT_USER, SUB_USER_ONLINE } from '../../graphql_client/subscription/subscriptionUser';
import { NEW_CHAT_USER } from '../../graphql_client/mutations/mutationUser';
import { connect } from 'react-redux';
import ActionChat from '../../redux_store/actions/actionchat';
import ActionNotificationChat from '../../redux_store/actions/actionNotificationChat';
import { SizeImageUser } from '../utils';
import UsersOnline from './usersOnline';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  componentWillMount = () => { };


  componentDidMount = () => {
    this.props.subscribeToMore({
      document: SUB_CHAT_USER,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        this.updateQuerySubscribe(subscriptionData);
        this.scrolling();
      },
    });
  };

  updateQuerySubscribe = subscriptionData => {
    const { message, date, user } = subscriptionData.data.subChatUsers;
    let set = new Set([...this.props.chatMnsUsers, { message, date, user }].map(JSON.stringify))
    this.props.ActionChat(Array.from(set).map(JSON.parse));
    if (subscriptionData.data.subChatUsers.user.email != this.props.session.email && this.props.visibility === false) {
      if (subscriptionData.data.subChatUsers.new) {
        this.props.ActionNotificationChat('div_msn_count_notification');
      };
    } else {
      this.props.ActionNotificationChat('');
    };
  };

  scrolling = () => document.getElementById('list_msn').scrollTop = document.getElementById('list_msn').scrollHeight;

  listChatUser = () => (
    <Fragment>
    <div id="list_msn" className="list_msn border ">
      <ul className="list-group list-group-flush ul_chat m-1">
        {this.props.chatMnsUsers.map((msn, key) => {
          if (msn.user.email === this.props.session.email) {
            return <li key={key} className="list-group-item li_chat">
              <div className="media float-right">
                <div className="bubble_chat_user float-right">
                  <div>{msn.message}</div>
                  <div className="float-right date_chat_user">{msn.date}</div>
                </div>
                <div className="">
                  <Link className="d-block" to={`#`}>
                    <img
                      src={SizeImageUser(msn.user.imageUrl, 'sx') || '../../assets/images_locals/profile.png'}
                      className="align-self-start ml-2 rounded-circle imgborder float-right"
                      title={msn.user.name}
                      alt={msn.user.name}
                      width="35"
                    />
                  </Link>
                </div>
              </div>
            </li>
          } else {
            return <li key={key} className="list-group-item li_chat">
              <div className="media">
                <div>
                  <Link className="d-block" to={`#`}>
                    <img
                      src={SizeImageUser(msn.user.imageUrl, 'sx') || '../../assets/images_locals/profile.png'}
                      className="align-self-start mr-2 rounded-circle imgborder"
                      title={msn.user.name}
                      alt={msn.user.name}
                      width="35"
                    />
                  </Link>
                </div>
                <div className="bubble_chat_other_user">
                  <div>{msn.message}</div>
                  <div className="date_chat_other_user">{msn.date}</div>
                </div>
              </div>
            </li>
          }
        })}
      </ul>
    </div>
    </Fragment>
  );

  onSubmit = (e, chatUser) => {
    e.preventDefault();
    if (e.target[0].value != '') {
      chatUser({ variables: { user: this.props.session, message: e.target[0].value } });
    };
    e.target[0].value = '';
  };

  render() {
    return (
      <Fragment>
        {this.listChatUser()}
        <Query query={USERS_ONLINE} >
          {({ loading, error, data}) =>  {
            if(loading) return 'cargando';
            if (error) return console.log('error_QUERY_USERS_ONLINE',error);
            return <UsersOnline usersOnline={data.usersOnline || []} session={this.props.session} subscribeToMore={this.props.subscribeToMore}/>
          }}
        </Query>
        <Mutation mutation={NEW_CHAT_USER}>
          {(chatUser, { loading, error, data }) => (
            <form className="form-inline mt-2" onSubmit={e => this.onSubmit(e, chatUser)}>
              <div className="input-group mb-3 w-100">
                <input
                  id="input_chat"
                  type="text"
                  //autofocus="autofocus"
                  autoComplete="off"
                  onFocus={() => this.scrolling()}
                  onKeyPress={() => this.scrolling()}
                  className="form-control"
                  placeholder="escribe un mensaje"
                  aria-label="escribe un mensaje"
                  aria-describedby="basic-addon2"
                />
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