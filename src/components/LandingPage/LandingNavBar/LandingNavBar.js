import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class LandingNavBar extends Component {
    render() {
        return(
            <div id="landing-navbar" className="nav-bar">
                <div id="navbar-right" className="content-right">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Inicia Sesión</NavLink>
                    <NavLink to="/">Registrate</NavLink>
                </div>
            </div>
        );
    }
}


export default LandingNavBar;