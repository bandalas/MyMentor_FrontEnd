import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

//import NavLink from 'react-bootstrap/NavLink';

class LandingNavBar extends Component {
    render() {
        return(
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        );
    }
}

export default LandingNavBar;