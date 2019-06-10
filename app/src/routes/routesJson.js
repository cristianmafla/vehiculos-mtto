import React from 'react';

const routesGeneral = [
    {
        to: '/',
        name: 'Home',
        permission: ['rol_invited'],
        icon: <i className="far fa-address-card"></i>,
        viewNav: true,
    },
    {
        to: '/new_user',
        name: 'Registrarme',
        permission: ['rol_invited'],
        icon: <i className="fas fa-user"></i>,
        viewNav: true,
    },
    {
        to:"#",
        name:'Colombia',
        icon: <i className="far fa-address-card"></i>,
        viewNav: true,
        subRoutes:[{
            to: "/departamentos",
            name: 'Departamentos',
            icon: <i className="far fa-address-card"></i>,
            viewNav: true,
        },
        {
            to: "/municipios",
            name: 'Municipios',
            icon: <i className="far fa-address-card"></i>,
            viewNav: true,
        }]
    },
    {
        to: '/login',
        name: 'Entrar',
        permission: ['rol_invited'],
        icon: <i className="fas fa-sign-in-alt"></i>,
        viewNav: true,
    },
    {
        to: '*',
        permission: ['rol_invited'],
        viewNav:false,
    }
];

const routesSession = [
  ...routesGeneral ,
  {
    to: '/admin_users',
    name: 'Admin Users',
    permission: 'rol_admon',
    icon: <i className="fas fa-users"></i>,
    viewNav: true,
  },
];


export  {routesGeneral, routesSession};