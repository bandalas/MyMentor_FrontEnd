import React, {Component} from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter , Alert, Input, FormGroup, FormFeedback  } from 'reactstrap';
import Axios from 'axios';
import './preset.css';
import queryString from 'query-string'
import url from '../../../../Url';

class PasswordReset extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password: '',
            confirm: '',
            passwordMatch: true,
            success: false,
            error: false
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return(
            this.renderResetForm()
        );
    }

    /*  *   *   *   *   *   *   *   *   *
    *                                   *
    *       View Functions              *
    *                                   *
    *  *   *   *   *   *   *   *   *   */


    renderResetForm = () => {
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.renderSuccessModal()}
                {this.state.error ? this.renderErrorAlert() : null}
            <div className="mainwindow">     
                     
                <FormGroup>
                    <Col md="12">
                    Escribe tu nuevo password
                    <Input  type="password"
                            name="password"
                            required
                            minLength="7"
                            onChange={this.handlePasswordChange}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    Confirma tu nuevo password
                        {this.state.passwordMatch ? 
                            <Col md="12">
                                <Input  type="password"
                                    name="confirmation"
                                    required
                                    minLength="7"
                                    onChange={this.handlePasswordChange}/>
                            </Col> 
                            :
                            <Col md="12">
                                <Input  invalid
                                    type="password"
                                    name="confirmation"
                                    required
                                    minLength="7"
                                    onChange={this.handlePasswordChange}/>
                                <FormFeedback>
                                    Ambas contraseñas deben de ser igual.
                                </FormFeedback>
                            </Col>
                        }
                </FormGroup>
                <div className="resetbtn"> 
                {this.state.passwordMatch ?  
                                                <Button type="submit">
                                                    Guardar
                                                </Button> 
                                          :     <Button disabled>
                                                    Guardar
                                                </Button>}
                </div>
            </div>
            </Form>
        );
    }

    renderSuccessModal = () => {
        return(
            <Modal isOpen={this.state.success} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Contraseña modificad con éxito</ModalHeader>
                <ModalBody>
                    La contraseña fue modificada con éxito. 
                    <p>
                        De click en el botón para ser redireccionado
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Continuar</Button>{' '}
                </ModalFooter>
            </Modal>
        );
    }

    renderErrorAlert = () => {
        return (
            <Alert color='danger'>
                ¡Oh no! Surgió un error, intente más tarde.
            </Alert>
        );
    }

    /*  *   *   *   *   *   *   *   *   *
    *                                   *
    *       Logic Functions             *
    *                                   *
    *  *   *   *   *   *   *   *   *   */

    handlePasswordChange(event) {
        if(event.target.name === 'password') {
            this.setState({
                password: event.target.value
            })
        }
        else {
            this.setState({
                confirm: event.target.value
            }, () => {
                this.setState({
                    passwordMatch: this.passwordMatches()
                })
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.requestPasswordChange();
    }

    toggle() {
        this.props.history.push('/login');
    }

    /*  *   *   *   *   *   *   *   *   *
    *                                   *
    *       Auxiliar Functions          *
    *                                   *
    *  *   *   *   *   *   *   *   *   */
    passwordMatches= () => {
        return this.state.password === this.state.confirm;
    }

    requestPasswordChange = () => {
        const values = queryString.parse(this.props.location.search);
        const data = {
            token: values.token,
            password: this.state.password
        }

        Axios.post(url + '/students/reset_password', data)
            .then(data => {
                this.setState({
                    success: data.data.success,
                    error: !data.data.success
                })
            })
    }
}
export default PasswordReset;
