import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Col } from 'react-bootstrap';
import './Header.css';

class LandingHeader extends Component {
    render() {
        return(
            <div id="main-header">
                <Navbar bg="light" variant="light" fixed = "top" className="main-navbar">
                    <Navbar.Brand href="#home">My Mentor Logo</Navbar.Brand>
                    <Form inline className="md">
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <Nav className="navbar-right">
                        <Nav.Link href="#home">Explora</Nav.Link>
                        <Nav.Link href="#features">
                            <Button variant="outline-info">Inicia Sesión</Button>
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <Button variant="outline-info">Registrate</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default LandingHeader;