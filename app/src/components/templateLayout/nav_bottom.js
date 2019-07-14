import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBottom extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => { };

    render() {
        if(this.props.pathUrl !== 'login'){
            return (
                <nav className="nav_bottom fixed-bottom d-flex justify-content-around">
                    <Link to="/new_car"><i className="fas fa-car" title="new mtto car"></i></Link>
                    <Link to=""><i className="fas fa-camera" title="camera"></i></Link>
                    <Link to=""><i className="far fa-plus-square" title="more"></i></Link>
                    <Link to=""><i className="fas fa-search" title="search"></i></Link>
                    <Link to=""><i className="fas fa-user-friends" title="friends"></i></Link>
                </nav>
            );
        }
        return null;
    }
}

export default NavBottom;