import React, {Component}from 'react';
import {Form, Col } from 'react-bootstrap';
import { Input, FormGroup } from 'reactstrap';
import './../login.css';

class NormalForm extends Component {

    render(){
        return(
            <FormGroup >
                <Col xs="10">
                    <Form.Label>Correo electrónico</Form.Label>
                </Col>  
                <Col xs="10">
                    <Input  bsSize="lg"
                            type="email"
                            name="email"
                            required
                            onChange={this.props.onInputChange}/>
                </Col>
                <Col xs="10">
                    <Form.Label>Contraseña</Form.Label>
                </Col>
                <Col xs="10">
                    <Input   bsSize="lg"
                                    type="password"
                                    name="password"
                                    required
                                    onChange={this.props.onInputChange}/>
                </Col>
            </FormGroup>       
        );
    }
}

export default NormalForm;
