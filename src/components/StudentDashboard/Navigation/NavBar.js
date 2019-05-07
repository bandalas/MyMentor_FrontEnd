import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


class NavBar extends Component {
    render() {
        return(
            <div id="dashboard-navbar" className="nav-bar">
                <div id="navbar-right" className = "content-right">
                    <NavLink to='/student/dashboard'>Home</NavLink>
                    <NavLink to='/student/search/mentor'>Mentores</NavLink>
                    <NavLink to='/student/search/class'>Clases</NavLink>
                    <NavLink to='/logout'>Logout</NavLink>
                </div>
            </div>
        );
    }
}
export default NavBar;
