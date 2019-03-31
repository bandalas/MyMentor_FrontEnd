import React, {Component}from 'react';
import {Form, Col } from 'react-bootstrap';
import { Input, FormGroup} from 'reactstrap';
import './../reset.css';

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
                            onChange={this.props.onInputChange}/>
                </Col>
            </FormGroup>       
        );
    }
}

export default NormalForm;
