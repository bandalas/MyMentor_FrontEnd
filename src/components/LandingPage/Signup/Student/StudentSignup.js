import React, {Component} from 'react';
import { Form, Col } from 'react-bootstrap';
import { Input, FormGroup } from 'reactstrap';

class StudentSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            institution: '',
            semester: 0
        }
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onInstitutionChange = this.onInstitutionChange.bind(this);
        this.onSemesterChange = this.onSemesterChange.bind(this);
    }

    render() {
        return(
            <div id="student-signup">
                <FormGroup>

                    <Col>
                        <Form.Label>Nombre</Form.Label>
                    </Col>
                    <Col>
                        <Input  bsSize="lg"
                                type="text"
                                name="firstname"
                                onChange={this.onFirstNameChange}
                                required
                                        />
                    </Col>

                    <Col>
                        <Form.Label>Apellido(s)</Form.Label>
                    </Col>
                    <Col>
                        <Input  bsSize="lg"
                                type="text"
                                name="lastname"
                                onChange={this.onLastNameChange}
                                required
                                        />
                    </Col>

                    <Col>
                        <Form.Label>Correo electrónico</Form.Label>
                    </Col>
                    <Col>
                        <Input  bsSize="lg"
                                type="text"
                                name="email"
                                onChange={this.onEmailChange}
                                required
                                        />
                    </Col>

                    <Col>
                        <Form.Label>Contraseña</Form.Label>
                    </Col>
                    <Col>
                        <Input  bsSize="lg"
                                type="password"
                                name="password"
                                onChange={this.onPasswordChange}
                                required
                                        />
                    </Col>

                    <Col>
                        <Form.Label>Institución</Form.Label>
                    </Col>
                    <Col>
                        <Input  bsSize="lg"
                                type="text"
                                name="institution"
                                onChange={this.onInstitutionChange}
                                required
                                        />
                    </Col>

                    <Col>
                        <Form.Label>Semestre</Form.Label>
                    </Col>
                    <Col>
                        <Input  bsSize="lg"
                                type="number"
                                name="semester"
                                onChange={this.onSemesterChange}
                                required
                                        />
                    </Col>
                </FormGroup>
            </div>
        );
    }

    handleFormSubmission() {
        
    }




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