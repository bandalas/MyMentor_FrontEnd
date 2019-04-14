import React, {Component} from 'react';
import { FormGroup, Form, Col } from 'react-bootstrap';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignupPartThree from './SignupPartThree';
class SignupPartTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            didChange: false,
            profilePicture: '',
            areas: [],
            description: '',
            modal: false,
            shouldLoadPartThree: false,
            email: ''
        };
        // V i e w s
        this.renderForm = this.renderForm.bind(this);
        this.renderPartThree = this.renderPartThree.bind(this);

        // L o g i c
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.formHasMissingFields = this.formHasMissingFields.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentWillMount() {
        this.setState({
            description : this.props.description
        })
    }
    
    render() {
        if(this.state.shouldLoadPartThree) {
            return this.renderPartThree();
        }else {
            return this.renderForm();
        }
    }

    renderForm(){
        return (
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
                    <Form.Label>
                        Imagen de perfil
                    </Form.Label><br/>
                    <input  ref = {(ref) => {this.fileName = ref;}}
                            type="file"
                            name="profile-picture"
                            />
                    
                    <Col>
                        <Form.Label>Área de expertiz</Form.Label>
                    </Col>
                    <Col>
                        <Input  type = "select"
                                onChange = {this.handleAreaChange}
                                multiple>
                                <option value='Matematicas'>Matemáticas</option>
                                <option value="Quimica">Química</option>
                                <option value="Fisica">Física</option>
                                <option value="Programacion">Programación</option>
                                <option value="Electronica">Electrónica</option>
                                <option value="Economia">Economía</option>
                                <option value="Estadistica">Estadística</option>
                                <option value="Ingles">Inglés</option>
                                <option value="Aleman">Alemán</option>
                                <option value="Frances">Francés</option>
                        </Input>
                    </Col>
                    <Col>
                        <Form.Label>Descripción</Form.Label>
                    </Col>
                    <Col>
                        <Input  type="textarea"
                                value = {this.state.description}
                                onChange={this.handleDescriptionChange}
                                />
                    </Col>
                    <Button onClick={this.props.returnToFormOne}>Anterior</Button>
                    <Button onClick={this.handleSignupSequence}>Siguiente</Button>
                </FormGroup>
            </div>
        );
    }

    renderPartThree(){
        var tutor_object = this.props.tutor;
        tutor_object.img = this.fileName.files[0];
        tutor_object.category = this.state.areas;
        tutor_object.description = this.state.description;
        return(
            <SignupPartThree    returnToFormTwo={this.returnToFormTwo}
                                emailChange = {this.handleEmailChange}
                                email = {this.state.email}
                                tutor = {tutor_object}
                                
            />
        );
    }

    /****************************************
    *
    *   Functions that will handle form input
    * 
    *****************************************/

    handleSignupSequence = () => {
        if(this.formHasMissingFields()) {
            this.setState({
                modal: true
            });
        }else{
            this.setState({
                shouldLoadPartThree: !this.shouldLoadPartThree
            });
        }
    }

    returnToFormTwo = () => {
        this.setState({
            shouldLoadPartThree: false
        });
    }

    handleEmailChange = (email) => {
        this.setState({
            email: email
        });
    }

    handleAreaChange(event) {
        const options = event.target.options;
        var selected = [];
        for(var i = 0 ; i < options.length; i++) {
            if(options[i].selected) {
                selected.push(options[i].value);
            }
        }
        this.setState({
            areas: selected
        });
        
    }

    handleDescriptionChange(event) {
        const description = event.target.value;
        this.setState({
            description: description
        });
        this.props.descriptionChange(description);
    }

    formHasMissingFields(){
        return (
            !this.fileName.files[0] ||
            this.state.areas.length === 0 ||
            this.state.description === ""
        )
    }

    toggle() {
        this.setState({
            hasError : false,
            modal : false,
        })
    }

}

export default SignupPartTwo;