import React, { Component } from 'react';
import '../../../Navbar.css';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

class LandingNavBar extends Component {
    render() {
        return(
            <div id="landing-navbar" className="nav-bar">
                <div className="navbar-item left">
                    <NavLink to="/">MyMentor</NavLink>
                    <NavLink to="/search">Buscar Clases</NavLink>
                </div>
                <div className="navbar-item right">
                    <NavLink to="/login">Inicia Sesión</NavLink>
                    <NavLink to="/tutors">Conviértete en tutor</NavLink>
                    <NavLink to="/signup">Registrate como estudiante</NavLink>
                </div>
            </div>
        );
    }
}


export default LandingNavBar;