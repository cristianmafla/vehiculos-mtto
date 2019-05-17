import React from 'react';

const routesGeneral = [
    {
        to: '/',
        name: 'Home',
        icon: <i className="far fa-address-card"></i>,
        viewNav: true,
    },
    {
        to: '*',
        viewNav:false,
    }
];

const routesSession = [ ...routesGeneral ];


export  {routesGeneral, routesSession};