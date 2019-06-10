import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import RoutesAuthenticated from '../../routes/authenticated';
import RoutesNotAuthenticated from '../../routes/notAuthenticated';
import BtnCloseSession from '../users/session/closeSession';

class Nav extends Component {
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
          if(route.to === '/login' && this.props.session.email) return '';
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

export default Nav;


/*

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {routesGeneral, routesSession} from '../../routes/routesJson';
import BtnCloseSession from '../users/session/closeSession';

class Nav extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount = () => {};

  toogleDropDownNav = name => {
    const el = document.querySelector(`.${name}`);
    el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
  };

  links = () => {
    if(this.props.session.email){
      return(
        routesSession.map((data, i) => {
          if(data.viewNav){
            return (
              <li key={i} className="list-group-item list-group-item-action">
                {data.href
                  ? <a className="nav-link" href={data.to}>{data.icon} {data.name}</a>
                  : <Link key={i} to={data.to} onClick={this.props.handlerToogle} className="nav-link">
                    {data.icon} {data.name}
                  </Link>
                }
              </li>
            );
          }
        })
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
    }
  };

  render(){
      return(
          <nav id="menu">
              <h2 className="mb-3 ml-2">Menú</h2>
              <ul className="list-group list-group-flush ul_menu">
                  {this.links()}


                <li  className="list-group-item list-group-item-action li_drop">
                  <Link to={'#'} onClick={() => this.toogleDropDownNav('ul_1')} className="nav-link">
                    <i className="fas fa-code"></i> Drop down <i className="fas fa-caret-down"></i>
                  </Link>

                <ul className="list-group list-group-flush ul_menu ul_1" style={{display:'none'}}>
                    <li className="list-group-item list-group-item-action">
                      <Link to={'#'} onClick={() => { }} className="nav-link">sub menu</Link>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <Link to={'#'} onClick={() => { }} className="nav-link">sub menu</Link>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <Link to={'#'} onClick={() => { }} className="nav-link">sub menu</Link>
                    </li>
                  </ul>
                </li>
            <li className="list-group-item list-group-item-action li_drop">
              <Link to={'#'} className="nav-link">otro campo</Link>
              </li>

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

export default Nav;






                <li  className="list-group-item list-group-item-action">
                  <Link to={'#'} onClick={() => this.toogleDropDownNav('ul_1')} className="nav-link">
                    <i className="fas fa-code"></i> Drop down <i className="fas fa-caret-down"></i>
                  </Link>

                <ul className="list-group list-group-flush ul_menu ul_1" style={{display:'none'}}>
                    <li className="list-group-item list-group-item-action">
                      <Link to={'#'} onClick={() => { }} className="nav-link">sub menu</Link>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <Link to={'#'} onClick={() => { }} className="nav-link">sub menu</Link>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <Link to={'#'} onClick={() => { }} className="nav-link">sub menu</Link>
                    </li>
                  </ul>
                </li>
*/