import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';

class LandingHeader extends Component {
    render() {
        return(
            <div id="main-header">
                <Navbar bg="light" variant="light" fixed = "top" className="rip">
                    <Navbar.Brand href="#home">My Mentor Logo</Navbar.Brand>
                    <Form inline className="md">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <Nav className="">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default LandingHeader;