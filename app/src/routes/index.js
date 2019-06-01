import React from 'react';
import { Switch, Route } from 'react-router-dom';
//GENERAL COMPONENTS
import Home from '../components/home';
import Nomatch from '../components/nomatch';
import NotAuthorized from '../components/nomatch/notauthorized';
//USERS COMPONENTS
import NewUser from '../components/users/new_user';
import Login from '../components/users/login';
import Session from '../components/users/session';
import AdminUsers from '../components/users/admin_user';

const MSG_NOTAUTHORIZED = 'You do not have the necessary permits';

const Component = (props, Component) => <Component {...props} />;

const ValidSession = (props, Component, params = null) => {
  return props.session ? <Component {...props} params={params} /> : <NotAuthorized message={MSG_NOTAUTHORIZED} />;
};

const ValidSessionAdmin = (props, Component, params = null) => {
  if(props.session){
    const rolAdmin = props.session.roles.map(rol => rol.name === 'rol_admon' && rol.checked === true);
    return rolAdmin.indexOf(true) >= 0 ? <Component {...props} params={params} /> : <NotAuthorized message={MSG_NOTAUTHORIZED} />
  }
  return <NotAuthorized message={MSG_NOTAUTHORIZED} />;
};

const App = props => {
  return (
    <Switch>
      {/*ROUTES GENERAL*/}
      <Route path="/" render={() => Component(props, Home)} exact />
      {/*ROUTES USER*/}
      <Route path="/login" render={() => Component(props, Login)} exact />
      <Route path="/new_user" render={() => Component(props, NewUser)} exact />
      <Route path="/admin_users" render={() => ValidSessionAdmin(props, AdminUsers)} exact />
      {/*OTHER ROUTES*/}
      <Route path="*" component={Nomatch} />
    </Switch>
  );
};

export default Session(App);