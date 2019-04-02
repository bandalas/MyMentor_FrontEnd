import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, withRouter} from 'react-router-dom';
import './Header.css';
//import NavLink from 'react-bootstrap/NavLink';

class LandingNavBar extends Component {
    render() {
        return(
                    <Navbar bg="light" variant="light" fixed = "top" className="main-navbar">
                        <Navbar.Brand href="#home">My Mentor Logo</Navbar.Brand>
                        <Nav.Link as={NavLink} exact to="/search">
                            <div className="font-weight-bold">
                                Buscar clases
                            </div>
                        </Nav.Link>

                        <Nav className="navbar-right">
                            <Nav.Link as={NavLink} exact to="/login">
                                <div className="box box-outline">
                                    Inicia Sesión
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} exact to="/sign-up">
                                <div className="box box-outline-blue">
                                    Registrate
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
        );
    }
}
LandingNavBar = withRouter(LandingNavBar);
export default LandingNavBar;