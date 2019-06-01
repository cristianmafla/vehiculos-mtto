import React from 'react';

const routesGeneral = [
    {
        to: '/',
        name: 'Home',
        icon: <i className="far fa-address-card"></i>,
        viewNav: true,
    },
    {
        to: '/new_user',
        name: 'Registrarme',
        icon: <i className="fas fa-user"></i>,
        viewNav: true,
    },
    {
        to: '/login',
        name: 'Entrar',
        icon: <i className="fas fa-sign-in-alt"></i>,
        viewNav: true,
    },
    {
        to: '*',
        viewNav:false,
    }
];

const routesSession = [ 
  ...routesGeneral ,
  {
    to: '/admin_users',
    name: 'Admin Users',
    icon: <i className="fas fa-users"></i>,
    viewNav: true,
  },
];


export  {routesGeneral, routesSession};