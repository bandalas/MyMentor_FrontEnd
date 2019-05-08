import React, {Component} from 'react';
import { FormGroup, Form, Col } from 'react-bootstrap';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Popover, PopoverHeader, PopoverBody  } from 'reactstrap';
import SignupPartThree from './SignupPartThree';
import './SignupStyle.css';

class SignupPartTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            didChange: false,
            profilePicture: '',
            areas: [],
            description: '',
            modal: true,
            shouldLoadPartThree: false,
            email: '',
            hasError: false
        };
        // V i e w s
        this.renderForm = this.renderForm.bind(this);
        this.renderPartThree = this.renderPartThree.bind(this);
        this.renderBodyOfForm = this.renderBodyOfForm.bind(this);

        // L o g i c
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
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
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Paso 2: Cuentanos de ti</ModalHeader>

                    <ModalBody>
                        {this.renderBodyOfForm()}
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={this.props.returnToFormOne}>Anterior</Button>{' '}
                        <Button color="secondary" id="continue" onClick={this.handleSignupSequence}>Siguiente</Button>
                    </ModalFooter>
                    
                </Modal>
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
                    <Form.Label className="input_label">
                        Imagen de perfil
                    </Form.Label><br/>
                    {/* <input  
                            className="input_btn"
                            type="file"
                            name="recfiles"
                            onChange = {this.handleImageChange}
                            /> */}
                    <Input  className="input_btn"
                            type="file"
                            name="recfiles"
                            onChange = {this.handleImageChange} />
                    
                    <Col>
                        <Form.Label className="input_label">Área de expertiz</Form.Label>
                    </Col>
                    <Col>
                        <Input  
                                className="input_field"
                                type = "select"
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
                        <Form.Label className="input_label">Descripción</Form.Label>
                    </Col>
                    <Col>
                        <Input  
                                className="input_field"
                                type="textarea"
                                value = {this.state.description}
                                onChange={this.handleDescriptionChange}
                                />
                    </Col>
                </FormGroup>
            </div>
        );
    }

    renderPartThree(){
        var tutor_object = this.props.tutor;
        tutor_object.img = this.state.profilePicture;
        tutor_object.category = this.state.areas;
        tutor_object.description = this.state.description;
        return(
            <SignupPartThree    returnToFormTwo={this.returnToFormTwo}
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
                modal: true,
                hasError: true
            });
            setTimeout(function() {
                this.setState({ hasError: false});
            }.bind(this),3500);
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

    handleImageChange(event) {
        const file = event.target.files[0];
        this.setState({
            profilePicture: file
        });
    }
    formHasMissingFields(){
        return (
            this.state.profilePicture === "" ||
            this.state.areas.length === 0 ||
            this.state.description === ""
        )
    }

    toggle() {
        this.setState({
            modal : false,
        })
    }

}

export default SignupPartTwo;