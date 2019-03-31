import React, {Component}from 'react';
import {Form, Col } from 'react-bootstrap';
import { Input, FormGroup } from 'reactstrap';
import './../login.css';

class NormalForm extends Component {

    render(){
        return(
            <FormGroup>
                <Col md="4">
                    <Form.Label>Correo Electrónico</Form.Label>
                </Col>  
                <Col md="4">
                    <Input  type="email"
                            name="email"
                            required
                            onChange={this.props.onInputChange}/>
                </Col>
                <Col md="4">
                    <Form.Label>Contraseña</Form.Label>
                </Col>
                <Col md="4">
                    <Form.Control   type="password"
                                    name="password"
                                    required
                                    onChange={this.props.onInputChange}/>
                </Col>
            </FormGroup>       
        );
    }
}

export default NormalForm;
