import React, { Component } from 'react';
import '../../../Navbar.css';
import { NavLink } from 'react-router-dom';

class NavBarTutor extends Component {
    render() {
        return(
            <div id="tutor-navbar" className="nav-bar">
                <div className="navbar-item left">
                    <NavLink to='/tutor/dashboard'>Home</NavLink>
                </div>
                <div className="navbar-item right">
                    <NavLink to='/tutor/classes'>Clases</NavLink>
                    <NavLink to='/tutor/notifications'>Mis Notificaciones</NavLink>
                    <NavLink to='/tutor/bookings'>Mis Reservaciones</NavLink>
                </div>
            </div>
        );
    }
}
export default NavBarTutor;