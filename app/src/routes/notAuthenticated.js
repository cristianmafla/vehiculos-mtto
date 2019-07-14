import React from 'react';

const RoutesNotAuthenticated = [
    {
        to: '/',
        name: 'Sign In',
        icon: <i className="fas fa-sign-in-alt"></i>,
        viewNav: true,
        subRoutes:[],
    },
    {
        to: '*',
        viewNav: false,
        subRoutes:[]
    }
];

export default RoutesNotAuthenticated;