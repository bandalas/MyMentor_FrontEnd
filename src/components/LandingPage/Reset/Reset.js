import React, {Component}from 'react';
import {Form, Button, Col, Alert } from 'react-bootstrap';
import { Input, FormGroup, FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom'
import './reset.css';
import Axios from 'axios';

class Reset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            error : false,
            success: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.performPasswordResetRequest = this.performPasswordResetRequest.bind(this);
    }

    render() {
        return(
            <div className="reset-form">
            <div class="center" >
                {this.state.success ? this.displayAlertSuccess() : null}
                <Form onSubmit={this.handleSubmit}>
                    <Col md="4">
                        <Form.Label>Correo Electrónico</Form.Label>
                    </Col>
                    {this.state.error ? this.renderErrorForm() : this.renderNormalForm()}
                    <Col md="5" className="ResetButtons">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link exact to="/login" className="pl-3">
                            Regresar
                        </Link>
                    </Col>
                </Form>
                </div>
            </div>
        );
    }

    renderNormalForm = () => {
        return(
            <FormGroup>
<div class="emailinput">
                <Col md="12">
                    <Input  type="email" placeholder="El correo con el que te registraste...	"
                            name="email"
                            required
                            onChange={this.handleInputChange}/>
                </Col>
</div>
            </FormGroup>       
        );
    };

    renderErrorForm = () => {
        return(
            <FormGroup>
                <Input  invalid
                        type="email"
                        name="email"
                        required
                        onChange={this.handleInputChange}/>
                <FormFeedback>Oh no! Sucedió un error, intentalo de nuevo</FormFeedback>
            </FormGroup>
        )
    }

    displayAlertSuccess = () => {
        return (
            <Alert variant="success">
                <Alert.Heading>
                Revisa tu correo
                </Alert.Heading>
                <p>
                    Hemos enviado un correo a {this.state.email}. Da click al link que fue enviado para resetear
                    tu contraseña
                </p>
                <p>
                    Si no ves el correo, revisa otros lugares como tu folder de spam, basura y social.
                </p>
            </Alert>
        );
    }

    handleInputChange(event) {
        if(event.target.name === 'email') this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.performPasswordResetRequest();
    }

    performPasswordResetRequest(){
        let data = {
            'email' : this.state.email
        };
        Axios.post('http://localhost:3001/students/forgot-password', data)
            .then(data => {
                const wasSuccessfull = data.data.success;
                this.setState({
                    error: !wasSuccessfull,
                    success: wasSuccessfull
                });
                
            })
            .catch(error => {
                console.log(error);
            })
    }

 
}

export default Reset;
