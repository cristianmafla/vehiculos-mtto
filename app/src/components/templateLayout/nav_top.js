import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { ANYQUERY } from '../../graphql_client/queries/queryUser';
import NavUser from '../users/nav_user';
import { Detector } from "react-detect-offline";

class NavTop extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        const Slideout = require('slideout');
        this.slideout = new Slideout({
            'panel': document.getElementById('content_panel'),
            'menu': document.getElementById('menu'),
            'padding': 256,
            'tolerance': 70
        });
    }

    handlerToogle = () => this.slideout.toggle();

    render() {
        return (
            <Fragment>
                <Detector
                    render={({ online }) => (
                        <div className={`div_online ${online ? 'signal_internet_on' : 'signal_internet_off'}`}></div>
                    )}
                />
                <header className="nav_top">
                    <span onClick={this.handlerToogle} className="fas fa-bars"></span>
                    <Link to="/">
                        <i className="logo_nav fas fa-car"></i>
                        <h1 className="site_name">vehículos</h1>
                    </Link>
                    {
                        this.props.pathUrl === 'login'
                            ? null
                            : <Query query={ANYQUERY}>
                                {({ loading, error, subscribeToMore }) => {
                                    if (loading) return 'loading...';
                                    if (error) return console.log('error_GRAPHQL_ANYQUERY', error);
                                    return (
                                        <NavUser session={this.props.session} subscribeToMore={subscribeToMore} />
                                    );
                                }}
                            </Query>
                    }
                </header>
            </Fragment>
        );
    }
}

export default NavTop;