import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class LandingNavBar extends Component {
    render() {
        return(
            <div id="landing-navbar" className="nav-bar">
                <div className="navbar-item left">
                    <NavLink to="/search">Busca</NavLink>
                </div>
                <div className="navbar-item right">
                    <NavLink to="/tutors">Conviértete en tutor</NavLink>
                    <NavLink to="/login">Inicia Sesión</NavLink>
                    <NavLink to="/signup">Registrate</NavLink>
                </div>
            </div>
        );
    }
}


export default LandingNavBar;