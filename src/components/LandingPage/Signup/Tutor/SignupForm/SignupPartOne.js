import React, {Component} from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
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
            description: '',
            modal: true,
        };
        // Views
        this.renderFormPartOne = this.renderFormPartOne.bind(this);
        this.renderFormPartTwo = this.renderFormPartTwo.bind(this);
        this.renderBodyOfForm = this.renderBodyOfForm.bind(this);
        this.toggle = this.toggle.bind(this);
        this.togglePopOver = this.togglePopOver.bind(this);

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
        if(this.formHasEmptyFields()) {
            this.setState({
                hasError : true,
                modal : true
            });
            setTimeout(function() {
                this.setState({ hasError: false});
            }.bind(this),3500);
        } else {
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

    handleChildDescriptionChange = (description) => {
        this.setState({
            description: description
        });
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
                            {this.renderBodyOfForm()}
                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" id="continue" onClick={this.handleSignupSequence}>Siguiente</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>

                    </Modal>
                </div>
            </div>
        );
    }

    renderBodyOfForm() {
        return(
            <div>
                <Popover placement="bottom" isOpen={this.state.hasError} target="continue" toggle={this.togglePopOver}>
                    <PopoverHeader>Campos por completar</PopoverHeader>
                    <PopoverBody>
                        Todos los campos deben de estar llenos.
                    </PopoverBody>
                </Popover>

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
            </div>
        );
    }

    renderFormPartTwo() {
        const tutor_object = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            institution: this.state.university,
            semester: this.state.semester,
            gpa: this.state.gpa
        };

        return( <SignupPartTwo  returnToFormOne={this.handleSignupSequence} 
                                description={this.state.description}
                                descriptionChange = {this.handleChildDescriptionChange}
                                tutor = {tutor_object}
                                /> );
    }

    toggle() {
        this.setState({
            modal : false,
        })
    }

    togglePopOver() {
        
    }
    
}
export default SignupPartOne;