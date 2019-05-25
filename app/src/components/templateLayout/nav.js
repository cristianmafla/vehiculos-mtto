import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {routesGeneral, routesSession} from '../../routes/routesJson';
import BtnCloseSession from '../session/closeSession';

class Nav extends Component {
  constructor(props) {
      super(props);
  };

  links = () => {
    if(this.props.session.correo){
      return(
        routesSession.map((data, i) => (
          data.viewNav
            ? <li key={i} className="list-group-item list-group-item-action">
                {data.href
                    ? <a className="nav-link" href={data.to}>{data.icon} {data.name}</a>
                    : <Link key={i} to={data.to} onClick={this.props.handlerToogle} className="nav-link">
                        {data.icon} {data.name}
                    </Link>
                }
            </li>
            : null
        ))
      );
    }else{
      return(
        routesGeneral.map((data, i) => (
          data.viewNav
            ? <li key={i} className="list-group-item list-group-item-action">
                <Link key={i} to={data.to} onClick={this.props.handlerToogle} className="nav-link">
                    {data.icon} {data.name}
                </Link>
            </li>
            : null
        ))
      );
    };
  };

  render(){
      return(
          <nav id="menu">
              <h2 className="mb-3 ml-2">Menú</h2>
              <ul className="list-group list-group-flush ul_menu">
                  {this.links()}
                  <li className="list-group-item list-group-item-action">
                      <BtnCloseSession handlerToogle={this.props.handlerToogle}/>
                  </li>
              </ul>
          </nav>
      );
  }
}

export default Nav;