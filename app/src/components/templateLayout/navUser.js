import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal';

class NavUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility:false,
            usuario:{
                nombres:"",
                apellidos:"",
                correo:"",
                imageUrl:""
            },
            imageUrl:""
        };
    };

  componentWillMount = () => {

  }

	openModal = () => {
	  this.setState({visibility:true})
  };

	closeModal = () => this.setState({visibility:false});

	itemsUsuario = () => {
	  if(this.props.session){
  	  return(
    	  <div>
          <div className="div_msn_notification">
            <i onClick={() => this.openModal()} className="fas fa-comment-dots"></i>
          </div>
          <div className="div_nav_notification">
              <div className="div_count_notification"></div>
              <i className="fas fa-bell"></i>
          </div>
    	  </div>
  	  );
	  }
	}

	avatarUsuario = user => {
	  if(this.props.session){
	    return(
        <div className="div_nav_img_user">
            <img
              onClick={() => this.profileModal()}
              src={user.imageUrl || "../../assets/images_locals/profile.png"}
              alt={user.nombres}
              className="img_nav_user"
            />
            <p id="p_nav_user_name" className="d-none d-md-inline">
                {user.nombres || null }
            </p>
        </div>
	    );
	  }
    return(
      <div className="div_nav_img_user">
        <Link to={'/new_usuario'}>
          <img  src={user.imageUrl || "../../assets/images_locals/profile.png"} alt="" className="img_nav_user"/>
        </Link>
      </div>
    );

	}

	profileModal = () => {
	  this.openModal();
   return <Modal title="Perfil de usuario" visibility={this.state.visibility} size="" closeModal={this.closeModal}></Modal>

	}

  render(){
    let user = {};
    if(this.props.session){
        user ={
            nombres:this.props.session.nombres,
            apellidos:this.props.session.apellidos,
            correo:this.props.session.correo,
            imageUrl: this.props.session.imageUrl
        };
    }
    return(
      <div className="nav_user">
        {this.itemsUsuario()}
        {this.avatarUsuario(user)}
        <Modal title="Chat modal" visibility={this.state.visibility} size="" closeModal={this.closeModal}>
        </Modal>
      </div>
    );
  }
}

export default NavUser;