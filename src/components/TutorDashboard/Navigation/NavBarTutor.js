import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBarTutor extends Component {
    render() {
        return(
            <div className="nav-bar">
                <NavLink to='/tutor/dashboard'>Home</NavLink>
                <NavLink to='/tutor/classes'>Clases</NavLink>
                <NavLink to='/tutor/notifications'>Mis Notificaciones</NavLink>
                <NavLink to='/tutor/bookings'>Mis Reservaciones</NavLink>
            </div>
        );
    }
}
export default NavBarTutor;