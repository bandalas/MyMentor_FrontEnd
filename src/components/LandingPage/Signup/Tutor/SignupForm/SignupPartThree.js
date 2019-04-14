import React, {Component} from 'react';
import { FormGroup, Col, Form } from 'react-bootstrap';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignupPartThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpass: '',
            match: true
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
    }

    componentWillMount() {
        this.setState({
            email: this.props.email
        });
    }

    render() {
        return(
            <div>
                <FormGroup>
                    <Col>
                        <Form.Label>Correo Electrónico</Form.Label>
                    </Col>
                    <Col>
                        <Input  type = "email"
                                value = {this.state.email}
                                onChange = {this.handleEmailChange}
                                />
                    </Col>
                    
                    <Col>
                        <Form.Label>Contraseña</Form.Label>
                    </Col>
                    <Col>
                        <Input  type = "password"
                                onChange = {this.handlePasswordChange}
                                />
                    </Col>

                    <Col>
                        <Form.Label>Reingrese la contraseña</Form.Label>
                    </Col>
                    <Col>
                        {this.state.match ? (<Input  type = "password"
                                                onChange = {this.handlePasswordConfirmationChange}
                                            />) 
                                          : (<Input  type = "password"
                                                     invalid
                                                     onChange = {this.handlePasswordConfirmationChange}
                                            />)}
                        
                    </Col>
                </FormGroup>
                <Col>
                    <Button color="primary"
                            onClick={this.props.returnToFormTwo}>Anterior</Button>
                </Col>
            </div>
        );
    }

    /****************************************
    *
    *   Functions that will handle form input
    * 
    *****************************************/

    handleEmailChange(event) {
        const email = event.target.value;
        this.setState({
            email: email
        })
        this.props.emailChange(email);
    }

    handlePasswordChange(event) {
        const password = event.target.value;
        this.setState({
            password: password
        });
    }

    handlePasswordConfirmationChange(event) {
        const confirmation = event.target.value;
        this.setState({
            confirmpass: confirmation
        },() => {
            if(this.state.confirmpass !== this.state.password) {
                this.setState({
                    match: false
                });
            } else {
                this.setState({
                    match: true
                });
            }
        });
    }
}

export default SignupPartThree;