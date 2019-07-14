import React from 'react';


const RoutesAuthenticated = [
    {
        to: '/list_cars',
        name: 'List cars',
        icon: <i className="fas fa-car"></i>,
        viewNav: true,
        subRoutes: []
    },
    {
        to: '/new_car',
        name: 'New mtto car',
        icon: <i className="fas fa-car"></i>,
        viewNav: true,
        subRoutes: []
    },
    {
        to: '/user_car',
        name: 'User car',
        icon: <i className="fas fa-car"></i>,
        viewNav: true,
        subRoutes: []
    },
    {
        to: '/admin_users',
        name: 'Admin Users',
        icon: <i className="fas fa-users"></i>,
        viewNav: true,
        subRoutes:false,
    },
    {
        to: '/new_user',
        name: 'Sign Up',
        icon: <i className="fas fa-user"></i>,
        viewNav: true,
        subRoutes: []
    },
];

export default RoutesAuthenticated;