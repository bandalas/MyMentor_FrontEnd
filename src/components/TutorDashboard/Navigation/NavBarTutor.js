import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* <NavLink to='/tutor/search/my-class'>Mis Clases</NavLink> */
class NavBarTutor extends Component {
    render() {
        return(
            <div className="nav-bar">
                <NavLink to='/tutor/dashboard'>Home</NavLink>
                <NavLink to='/tutor/classes'>Clases</NavLink>
                <NavLink to='/tutor/notifications'>Mis Notificaciones</NavLink>
            </div>
        );
    }
}
export default NavBarTutor;