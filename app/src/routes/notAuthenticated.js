import React from 'react';


const RoutesNotAuthenticated = [
    {
        to: '/',
        name: 'Home',
        icon: <i className="far fa-address-card"></i>,
        viewNav: true,
        subRoutes:[],
    },
    {
        to: '/new_user',
        name: 'Sign Up',
        icon: <i className="fas fa-user"></i>,
        viewNav: true,
        subRoutes:[]
    },
    {
        to: "#",
        name: 'Colombia',
        icon: <i className="fas fa-globe-americas"></i>,
        viewNav: true,
        subRoutes: [{
            to: "/departamentos",
            name: 'Departamentos',
            icon: <i className="far fa-flag"></i>,
            viewNav: true,
        },
        {
            to: "/municipios",
            name: 'Municipios',
            icon: <i className="fas fa-flag"></i>,
            viewNav: true,
        }]
    },
    {
        to: '/login',
        name: 'Sign In',
        icon: <i className="fas fa-sign-in-alt"></i>,
        viewNav: true,
        subRoutes:[]
    },
    {
        to: '*',
        viewNav: false,
        subRoutes:[]
    }
];

export default RoutesNotAuthenticated;