import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* <NavLink to='/tutor/search/my-class'>Mis Clases</NavLink> */
class NavBarTutor extends Component {
    render() {
        return(
            <div>
                <NavLink to='/tutor/dashboard'>Home</NavLink>
                <NavLink to='/tutor/search/class'>Clases</NavLink>
                <NavLink to='/tutor/search/my-session'>Mis Sesiones</NavLink>
            </div>
        );
    }
}
export default NavBarTutor;