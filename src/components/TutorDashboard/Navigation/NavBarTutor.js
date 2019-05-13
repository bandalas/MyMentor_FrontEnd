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
                    <NavLink to='/search'>Buscar</NavLink>
                    <NavLink to='/tutor/classes'>Mis Clases</NavLink>
                    <NavLink to='/tutor/bookings'>Mis Reservaciones</NavLink>
                    <NavLink to='/tutors/reviews'>Mis Reviews</NavLink>
                    {/* <NavLink to='/tutors/profile'>Perfil</NavLink> */}
                    <NavLink to='/logout'>Logout</NavLink>
                </div>
            </div>
        );
    }
}
export default NavBarTutor;
