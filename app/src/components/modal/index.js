import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

/*
	USO DE LA MODAL

  <Modal title="ejemplo modal" visibility={true} size="">
  	 <p>CONTENIDO CHILDREN</p>
  </Modal>
*/


class Modal extends Component {
	constructor(props){
		super(props);
	};

  componentWillMount = () => {};

	componentDidMount = () => {};

	render(){
		return createPortal(
			<div className={`${this.props.visibility ? '' : 'g_modal_off' || this.state.off} g_modal`}>
			  <div className={`modal-dialog ${this.props.size}`}>
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title">{this.props.title}</h5>
			        <button onClick={() => this.props.closeModal()} type="button" className="close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">{this.props.children}</div>
			      <div className="modal-footer">
                <button className="btn btn-outline-secondary btn-sm"  onClick={() => this.props.closeModal()}>
                  cerrar
                </button>
			      </div>
			    </div>
			  </div>
			</div>,
			document.getElementById('modal_app')
		);
	};

};
export default Modal;




