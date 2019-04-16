import React, {Component} from 'react';
import { FormGroup, Form, Col } from 'react-bootstrap';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Popover, PopoverHeader, PopoverBody  } from 'reactstrap';
import SignupPartThree from './SignupPartThree';
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
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        {this.renderBodyOfForm()}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" id="continue" onClick={this.toggle}>Siguiente</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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
                    <Form.Label>
                        Imagen de perfil
                    </Form.Label><br/>
                    <input  ref = {(ref) => {this.fileName = ref;}}
                            type="file"
                            name="recfiles"
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
            modal : false,
        })
    }

}

export default SignupPartTwo;