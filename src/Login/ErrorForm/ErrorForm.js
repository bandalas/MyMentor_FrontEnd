import React, {Component}from 'react';
import {Form, Col } from 'react-bootstrap';
import { Input, FormGroup, FormFeedback } from 'reactstrap';
import './../login.css';

class ErrorForm extends Component {
    render(){
        return(
            <FormGroup>
                <Col md="4">
                    <Form.Label>Correo Electrónico</Form.Label>
                </Col>
                <Col md="4">
                    <Input  invalid
                            type="email"
                            name="email"
                            onChange={this.props.onInputChange}/> 
                    <FormFeedback>
                        Correo y/o contraseña incorrecta
                    </FormFeedback>
                </Col>
                
                <Col md="4">
                    <Form.Label>Contraseña</Form.Label>
                </Col>
                <Col md="4">
                    <Input   invalid
                             type="password"
                             name="password"
                             onChange={this.props.onInputChange}/>
                    <FormFeedback>
                        Correo y/o contraseña incorrecta
                    </FormFeedback>
                </Col>
                
            </FormGroup>       
        );
    }
}

export default ErrorForm;