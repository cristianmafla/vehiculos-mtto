import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { DELETE_USER } from '../../../graphql_client/mutations/mutationUser';
import FormEdit from '../forms/form_edit';
import ModalEditUser from '../../modal';
import { SizeImageUser } from '../../utils';


class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEditView:false,
      userEdit:{}
    };
  };

  componentWillMount = () => {

  };


  userDelete = (deleteUser,email)  => {
    deleteUser({ variables: { email } }).then(() => {
      if (email === this.props.session.email) {
        localStorage.setItem('tokenUser', 'null');
        location.reload();
      };
      this.props.refetch();
    }).catch(error => console.log('*** Error_GRAPHQL_DELETE_USER', error));
  };

  viewModalEditUser = user => this.setState({ modalEditView:true, userEdit:user});

  closeModal = () => this.setState({ modalEditView: false });

  modalEditUser = () => (
    <ModalEditUser title="Edit User" visibility={this.state.modalEditView} closeModal={this.closeModal} >
      <FormEdit history={this.props.history} refetch={this.props.refetch} user={this.state.userEdit || false}/>
    </ModalEditUser>
  );

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped table_list_users">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Mode</th>
              <th>Roles</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {this.props.users.map((user,key) => (
              <tr key={key} className={key % 2 === 0 ? 'table-info' : ''}>
                <td><img src={SizeImageUser(user.imageUrl,'sx')} className={user.online === true ? 'user_online' : 'user_offline'}/></td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.mode}</td>
                <td>{user.roles.map(rol => rol.name).toString().replace('rol_', '').replace(',rol_', '-').replace(',rol_', '-')}</td>
                <td><i onClick={() => this.viewModalEditUser(user)}className="fas fa-edit i_edit" title="edit"></i></td>
                <td>
                  <Mutation mutation={DELETE_USER} >
                  { delUs => <i onClick={() => this.userDelete(delUs, user.email)} className="fas fa-trash-alt i_delete" title="delete"></i>}
                  </Mutation>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.modalEditUser()}
      </div>
    );
  }
};

export default ListUsers;
