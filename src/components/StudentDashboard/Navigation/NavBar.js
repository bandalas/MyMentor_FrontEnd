import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <div className="nav-bar">
                <NavLink to='/student/dashboard'>Home</NavLink>
                <NavLink to='/student/search/mentor'>Mentores</NavLink>
                <NavLink to='/student/search/class'>Clases</NavLink>
            </div>
        );
    }
}
export default NavBar;