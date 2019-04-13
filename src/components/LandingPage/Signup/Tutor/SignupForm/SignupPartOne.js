import React, {Component} from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormGroup, Form, Col} from 'react-bootstrap';
import SignupPartTwo from './SingupPartTwo';

class SignupPartOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError : false,
            shouldLoadPartTwo : false,
            firstName : '',
            lastName : '',
            university: '',
            semester: '',
            gpa: '',
            modal:false
        };
        // Views
        this.renderFormPartOne = this.renderFormPartOne.bind(this);
        this.renderFormPartTwo = this.renderFormPartTwo.bind(this);
        this.renderFormWithError = this.renderFormWithError.bind(this);
        this.toggle = this.toggle.bind(this);

        // Form Logic
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleUniversityChange = this.handleUniversityChange.bind(this);
        this.handleSemesterChange = this.handleSemesterChange.bind(this);
        this.handleGPAChange = this.handleGPAChange.bind(this);
        this.formHasEmptyFields = this.formHasEmptyFields.bind(this);
        
    }

    render() {
        if(!this.state.shouldLoadPartTwo) {
            return this.renderFormPartOne();
                   
        } else {
            return this.renderFormPartTwo();
        }
    }

    /****************************************
    *
    *   Functions that will handle form input
    * 
    *****************************************/

    handleSignupSequence = () => {
        console.log(this.formHasEmptyFields());
        if(this.formHasEmptyFields()) {
            this.setState({
                hasError : true,
                modal : true
            });
        }else {
            this.setState({
                shouldLoadPartTwo : !this.state.shouldLoadPartTwo,
                hasError: false,
                modal: false
            });
        }
    }

    handleFirstNameChange(event) {
        const name = event.target.value;
        this.setState({
            firstName : name
        });
    }

    handleLastNameChange(event) {
        const lastname = event.target.value;
        this.setState({
            lastName : lastname
        });
    }

    handleUniversityChange(event) {
        const university = event.target.value;
        this.setState({
            university : university
        })
    }

    handleSemesterChange(event) {
        const semester = event.target.value;
        this.setState({
            semester : semester
        });
    }

    handleGPAChange(event) {
        const gpa = event.target.value;
        this.setState({
            gpa: gpa
        });
    }

    formHasEmptyFields() {
        return  (this.state.firstName === "" ||
                this.state.lastName === "" ||
                this.state.university === "" ||
                this.state.gpa === "" ||
                this.state.semester === "");
    }

    /****************************************
    *
    *   Functions that render the HTML content
    * 
    *****************************************/

    renderFormPartOne() {
        return(
            <div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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
                        <Form.Label>Nombre</Form.Label>   
                    </Col>
                    <Col>
                        <Input  type = "text"
                                value = {this.state.firstName}
                                onChange = {this.handleFirstNameChange}
                                required
                                />
                    </Col>
                    
                    <Col>
                        <Form.Label>Apellido(s)</Form.Label>
                    </Col>
                    <Col>
                        <Input  type="text" 
                                value = {this.state.lastName}
                                onChange = {this.handleLastNameChange}
                                required
                                />
                    </Col>

                    <Col>
                        <Form.Label>Universidad</Form.Label>
                    </Col>
                    <Col>
                        <Input  type="text"
                                value = {this.state.university}
                                onChange = {this.handleUniversityChange}
                                required
                                />
                    </Col>

                    <Col>
                        <Form.Label>Semestre</Form.Label>
                    </Col>
                    <Col>
                        <Input  type="number"
                                value = {this.state.semester}
                                onChange = {this.handleSemesterChange}
                                required
                                />
                    </Col>

                    <Col>
                        <Form.Label>Promedio</Form.Label>
                    </Col>
                    <Col>
                        <Input  type="number"
                                value = {this.state.gpa}
                                onChange = {this.handleGPAChange}
                                required />
                    </Col>
                </FormGroup>
                <Button color="danger" onClick={this.props.handleForm}>Cancel</Button>
                <Button color="info" onClick={this.handleSignupSequence}>Siguiente</Button>
            </div>
        );
    }

    renderFormWithError() {
        return(
            <div>
                <FormGroup>
                    <Col>
                        <Form.Label>Nombre</Form.Label>   
                    </Col>
                    <Col>
                        <Input  invalid
                                type = "text"
                                value = {this.state.firstName}
                                onChange = {this.handleFirstNameChange}
                                required
                                />
                    </Col>
                    
                    <Col>
                        <Form.Label>Apellido(s)</Form.Label>
                    </Col>
                    <Col>
                        <Input  invalid
                                type="text" 
                                value = {this.state.lastName}
                                onChange = {this.handleLastNameChange}
                                required
                                />
                    </Col>

                    <Col>
                        <Form.Label>Universidad</Form.Label>
                    </Col>
                    <Col>
                        <Input  invalid
                                type="text"
                                value = {this.state.university}
                                onChange = {this.handleUniversityChange}
                                required
                                />
                    </Col>

                    <Col>
                        <Form.Label>Semestre</Form.Label>
                    </Col>
                    <Col>
                        <Input  invalid
                                type="number"
                                value = {this.state.semester}
                                onChange = {this.handleSemesterChange}
                                required
                                />
                    </Col>

                    <Col>
                        <Form.Label>Promedio</Form.Label>
                    </Col>
                    <Col>
                        <Input  invalid
                                type="number"
                                value = {this.state.gpa}
                                onChange = {this.handleGPAChange}
                                required />
                    </Col>
                </FormGroup>
                <Button color="danger" onClick={this.props.handleForm}>Cancel</Button>
                <Button color="info" onClick={this.handleSignupSequence}>Siguiente</Button>
            </div>
        );
    }

    renderFormPartTwo() {
        return( <SignupPartTwo returnToFormOne={this.handleSignupSequence}/> );
    }

    toggle() {
        this.setState({
            hasError : false,
            modal : false,
        })
    }

}
export default SignupPartOne;