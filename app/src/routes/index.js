import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Session from '../components/session';
import Login from '../components/login';
import Home from '../components/home';
import Nomatch from '../components/nomatch';
import NotAuthorized from '../components/nomatch/notauthorized';

const ValidSession = (props,Component,params = null ) => props.session.correo ? <Component {...props} params={params} /> : <NotAuthorized /> ;

const Component = (props,Component) => <Component {...props} />;

const App = (props) => {
  return (
    <Switch>
      <Route path="/" render={() => Component(props, Home)} exact />
      <Route path="/login" render={() => Component(props, Login)} exact />
      <Route path="*" component={Nomatch} />
    </Switch>
  );
};

export default Session(App);