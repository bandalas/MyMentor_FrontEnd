import React, {Component} from 'react';
import { FormGroup, Col, Form } from 'react-bootstrap';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback } from 'reactstrap';
import axios from 'axios';

class SignupPartThree extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpass: '',
            match: true,
            taken: false,
            modal: false
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
        
        this.toggle = this.toggle.bind(this);
        this.hasMissingFields = this.hasMissingFields.bind(this);

        this.checkIfEmailIsTaken = this.checkIfEmailIsTaken.bind(this);
        this.registerTutor = this.registerTutor.bind(this);
        this.storeTutor = this.storeTutor.bind(this);
        
    }

    componentWillMount() {
        this.setState({
            email: this.props.email
        });
    }

    render() {  
        return(
            <div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} >
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <FormGroup>
                    <Col>
                        <Form.Label>Correo Electrónico</Form.Label>
                    </Col>
                    <Col>
                        {this.state.taken ? (<FormGroup>
                                                <Input  type = "email"
                                                        invalid
                                                        value = {this.state.email}
                                                        onChange = {this.handleEmailChange}
                                                />
                                                <FormFeedback>Oh no! El correo ya está registrado</FormFeedback>
                                             </FormGroup>)
                                          : (<FormGroup>
                                              <Input  type = "email"
                                                value = {this.state.email}
                                                onChange = {this.handleEmailChange}
                                                />
                                            </FormGroup>)}
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
                        {this.state.match ? ( <FormGroup>
                                                <Col>
                                                 <Form.Label>Reingrese la contraseña</Form.Label>
                                                </Col>
                                                <Input  type = "password"
                                                    onChange = {this.handlePasswordConfirmationChange}/>
                                              </FormGroup>) 
                                            : (<FormGroup>
                                                <Col>
                                                 <Form.Label>Reingrese la contraseña</Form.Label>
                                                </Col>
                                                  <Input  type = "password"
                                                     invalid
                                                     onChange = {this.handlePasswordConfirmationChange}/>
                                                  <FormFeedback>Las contraseñas deben de ser igual</FormFeedback>
                                              </FormGroup>
                                            )}
                        
                    </Col>
                </FormGroup>
                <Col>
                    <Button color="primary"
                            onClick={this.props.returnToFormTwo}>Anterior</Button>
                    <Button color="danger"
                            onClick={this.registerTutor}>Registrate</Button>
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
        });  
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

    hasMissingFields() {
        return  (this.state.email === "" ||
                this.state.password === "" ||
                this.state.confirmpass === "");
    }

    toggle() {
        this.setState({
            modal : false
        })
    }

    /****************************************
    *
    *   Functions that will handle the API
    * 
    *****************************************/

    checkIfEmailIsTaken () {
        const req_body = {
            tutor_email: this.state.email
        };
        axios.post('http://localhost:3001/tutors/email', req_body)
            .then((response) => {
                this.setState({
                    taken: response.data.found
                }, this.storeTutor());
            })
            .catch((error) => {
                console.log(error);
            });
    }

    registerTutor () {
        if(this.hasMissingFields()) {
            this.turnOnModal();
        } else {
            this.checkIfEmailIsTaken();
        }
    }

    storeTutor() {
        if(!this.state.taken) {
            const tutor = this.props.tutor;
            console.log(tutor);

            const tutor_data = new FormData();
            tutor_data.append('img', tutor.img);
            tutor_data.append('firstName', tutor.firstName);
            tutor_data.append('lastName', tutor.lastName);
            tutor_data.append('institution', tutor.institution);
            tutor_data.append('semester', tutor.semester);
            tutor_data.append('gpa', tutor.gpa);
            tutor_data.append('category', tutor.category);
            tutor_data.append('description', tutor.description);
            tutor_data.append('email',this.state.email);
            tutor_data.append('password',this.state.password);

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };

            axios.post('http://localhost:3001/tutors/signup', tutor_data, config)
                .then((response) => {
                    console.log('omg');
                })
                .catch((error) => {console.log(error)});
        }
    }

    turnOnModal = () => {
        this.setState({
            modal:true
        });
    }
}
export default SignupPartThree;
