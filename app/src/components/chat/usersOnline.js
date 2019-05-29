import React, { Component, Fragment } from 'react';
import { SizeImageUser } from '../utils';

class UsersOnline extends Component {
	constructor(props){
		super(props);
	}

  componentWillMount = () => {

  }

  componentDidMount = () => {

  };

	render(){
		return(
			<div className="div_online_user pt-1 pb-1 mt-2">
				{
					this.props.usersOnline.length > 0
						? this.props.usersOnline.map((user, key) => {
							if(this.props.session.email != user.email){
								return <img key={key} src={SizeImageUser(user.imageUrl, 'sx')} />
							};
						})
						:''
				}
			</div>
		);
  };

};



export default UsersOnline;




