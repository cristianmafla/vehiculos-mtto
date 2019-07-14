import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import RoutesAuthenticated from '../../routes/authenticated';
import RoutesNotAuthenticated from '../../routes/notAuthenticated';
import BtnCloseSession from '../users/session/closeSession';

class Menu extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount = () => {};

  toogleDropDownNav = name => {
    const el = document.querySelector(`.${name}`);
    el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
  };

  routesNav = rNav => {
    return rNav.map((route, key) => {
      if(route.viewNav){
        if(route.subRoutes.length > 0){
          return(
            <li key={key} className="list-group-item list-group-item-action">
              <Link to={'#'} onClick={() => this.toogleDropDownNav(`ul_${key}`)} className="nav-link">
                {route.icon} {route.name} <i className="fas fa-caret-down"></i>
              </Link>
              <ul className={`list-group list-group-flush ul_menu ul_${key}`} style={{ display: 'none' }}>
                {route.subRoutes.map((subRoute,subkey) => {
                  if(subRoute.viewNav){
                    return(
                      <li key={subkey} className="list-group-item list-group-item-action">
                        <Link to={subRoute.to} onClick={() => { }} className="nav-link">
                          {subRoute.icon} {subRoute.name}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </li>
          );
        }else{
          if(route.to === '/' && this.props.session.email) return '';
            return (
              <li key={key} className="list-group-item list-group-item-action">
                <Link to={route.to} onClick={this.props.handlerToogle} className="nav-link">
                  {route.icon} {route.name}
                </Link>
              </li>
            );
          }
        }
    });
  };

  routesNotAuthenticated = () => this.routesNav(RoutesNotAuthenticated);

  routesAuthenticated = () => {
    if(this.props.session.email){
      return this.routesNav(RoutesAuthenticated);
    }
  };

  render(){
    return(
      <nav id="menu">
        <h2 className="mb-3 ml-2">Menú</h2>
        <ul className="list-group list-group-flush ul_menu">
          {this.routesAuthenticated()}
          {this.routesNotAuthenticated()}

          {this.props.session.email
            ? <li className="list-group-item list-group-item-action">
              <BtnCloseSession handlerToogle={this.props.handlerToogle} email={this.props.session.email} />
            </li>
            :''
          }
        </ul>
      </nav>
    );
  }
}

export default Menu;