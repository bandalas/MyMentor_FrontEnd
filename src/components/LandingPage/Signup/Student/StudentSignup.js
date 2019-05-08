import React, {Component} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Input, FormGroup, FormFeedback } from 'reactstrap';
import { Redirect } from 'react-router'
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import './studentsignup.css';


class StudentSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // API required fields
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            institution: '',
            semester: 0,
            // For view logic
            redirect: false,
            taken: false
        }
        // Functions that handles user input
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onInstitutionChange = this.onInstitutionChange.bind(this);
        this.onSemesterChange = this.onSemesterChange.bind(this);
        // Functions that will handle the view
        this.renderFormBody = this.renderFormBody.bind(this);
        // Functions that will handle submission and API communication
        this.handleSubmission = this.handleSubmission.bind(this);
        this.emailIsTaken = this.emailIsTaken.bind(this);
        this.storeStudent = this.storeStudent.bind(this);
    }

    render() {
        // If the user has successfully  egistered then we want to redirect them
        if(this.state.redirect) {
            return (<Redirect to="/login"/>);
        }
        else {
            return(
                <div className="fm_student">
                    <div>
                        <Jumbotron id="jubmt_student">
                            <h2>Unete a nuestra comunidad como estudiante! </h2> 
                        </Jumbotron>
                    </div>
                    <div>
                        {this.renderFormBody()}
                    </div>
                </div>
            );
        }
    }
    // Function that displays the HTML of the body of the form
    renderFormBody() {
        return(
            <Form onSubmit={this.handleSubmission}>
                <FormGroup>
                    <div className="rest">
                        <Col xs="12">
                            <Form.Label className="lbl">Nombre</Form.Label>
                            <Input  bsSize="lg"
                                    type="text"
                                    name="firstname"
                                    onChange={this.onFirstNameChange}
                                    required
                                            />
                        </Col>

                        <Col xs="12">
                            <Form.Label>Apellido(s)</Form.Label>
                            <Input  bsSize="lg"
                                    type="text"
                                    name="lastname"
                                    onChange={this.onLastNameChange}
                                    required
                                            />
                        </Col>

                        {/*
                        *   If the username is taken, then we need to mark the error
                        */}
                        <Col xs="12">
                            <Form.Label>Correo electrónico</Form.Label>
                            {this.state.taken ? (<FormGroup>
                                                    <Input     invalid
                                                                bsSize="lg"
                                                                type="text"
                                                                name="email"
                                                                onChange={this.onEmailChange}
                                                                required />
                                                    <FormFeedback>Oh no! El correo ya está registrado</FormFeedback>
                                                 </FormGroup>
                                                )
                                              : (<Input bsSize="lg"
                                                        type="text"
                                                        name="email"
                                                        onChange={this.onEmailChange}
                                                        required />)}
                        </Col>

                        <Col xs="12">
                            <Form.Label>Contraseña</Form.Label>
                            <Input  bsSize="lg"
                                    type="password"
                                    name="password"
                                    onChange={this.onPasswordChange}
                                    required
                                            />
                        </Col>

                        <Col xs="12">
                            <Form.Label>Institución</Form.Label>
                            <Input  bsSize="lg"
                                    type="text"
                                    name="institution"
                                    onChange={this.onInstitutionChange}
                                    required
                                            />
                        </Col>

                        <Col xs="12">
                            <Form.Label>Semestre</Form.Label>
                            <Input  bsSize="lg"
                                    type="number"
                                    name="semester"
                                    onChange={this.onSemesterChange}
                                    required
                                            />
                        </Col>

                        <Button variant="primary" type="submit" className="bttn-full-size">
                            Completar Registro
                        </Button>
                    </div>
                </FormGroup>
            </Form>
        );
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle API communication
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    handleSubmission(event) {
        // Prevents page from reloading
        event.preventDefault();
        // First we have to check if the email is not taken
        this.emailIsTaken();
    }
    // Function that makes an API request to check if an email is taken
    emailIsTaken() {
        const req_body = {
            tutor_email: this.state.email
        };
        axios.post('https://young-fortress-54541.herokuapp.com/students/email', req_body)
            .then((response) => {
                this.setState({
                    taken: response.data.found,
                },this.storeStudent());
            })
            .catch((error) => {
                console.log(error);
            });
    }
    // Function that will register the student
    storeStudent() {
        if(!this.state.taken) {
            let studentData = {
                'firstName' :   this.state.firstname,
                'lastName'  :   this.state.lastname,
                'email'     :   this.state.email,
                'password'  :   this.state.password,
                'institution':  this.state.institution,
                'semester'  :   this.state.semester
            }
            // Creating the post function for the record
            axios.post('https://young-fortress-54541.herokuapp.com/students/signup', studentData)
                .then( response => {
                    const success = response.data.success;
                    if(success) {
                        this.setState({
                            redirect: true
                        });
                    }
                })
                .catch( error => {
                    console.log(error)
                });
        }
    }
    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle user input
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    onFirstNameChange(event) {
        this.setState({
            firstname : event.target.value
        });
    }

    onLastNameChange(event) {
        this.setState({
            lastname : event.target.value
        });
    }

    onEmailChange(event) {
        this.setState({
            email : event.target.value
        });
    }

    onPasswordChange(event) {
        this.setState({
            password : event.target.value
        });
    }

    onInstitutionChange(event) {
        this.setState({
            institution : event.target.value
        });
    }

    onSemesterChange(event) {
        this.setState({
            semester : event.target.value
        });
    }
}

export default StudentSignup;