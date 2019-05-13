import React, {Component} from 'react';
import { FormGroup, Form, Col} from 'react-bootstrap';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Popover, PopoverHeader, PopoverBody, FormText} from 'reactstrap';
import axios from 'axios';
import url from '../../../../Url';

class CreateClass extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            modal: true,
            hasError: false,

            class_name: '',
            class_date: '',
            class_time: '',
            class_subject: '',
            class_area: 'Matemáticas', 
            class_description: '',
            class_price: ''
        }

        this.renderFormBody = this.renderFormBody.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);

        this.toggle = this.toggle.bind(this);

        this.createClass = this.createClass.bind(this);
        this.formHasMissingFields = this.formHasMissingFields.bind(this);
    }

    render() {
        return(
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Registro de clase</ModalHeader>

                    <ModalBody>
                        {this.renderFormBody()}
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" id="continue" onClick={this.createClass}>Crear</Button>{' '}
                    </ModalFooter>
            </Modal>
            
        );
    }

    renderFormBody ()  {
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
                        <Form.Label>
                            Nombre
                        </Form.Label>
                        <Input      type = 'text'
                                    onChange={this.handleNameChange} />
                        <FormText color='muted'>
                            Ej. Química para principiantes
                        </FormText>
                    </Col>

                    <Col>
                        <Form.Label>
                            Fecha
                        </Form.Label>
                        <Input      type = 'date'
                                    onChange={this.handleDateChange} />
                    </Col>

                    <Col>
                        <Form.Label>
                            Horario
                        </Form.Label>
                        <Input      type = 'time'
                                    onChange={this.handleTimeChange} />
                    </Col>

                    <Col>
                        <Form.Label>
                            Materia
                        </Form.Label>
                        <Input      type = 'text'
                                    onChange={this.handleSubjectChange} />
                        <FormText color='muted'>
                            Ej. Electricidad y magnetismo, Ecuaciones diferenciales, etc.
                        </FormText>
                    </Col>

                    <Col>
                        <Form.Label>
                            Área
                        </Form.Label>
                        <Input  type='select'
                                onChange={this.handleAreaChange}>
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
                        <Form.Label>
                            Descripción
                        </Form.Label>
                        <Input      type = 'textarea'
                                    onChange={this.handleDescriptionChange} />
                        <FormText color='muted'>
                            Breve descripción de la clase y temas especiales.
                        </FormText>
                    </Col>

                    <Col>
                        <Form.Label>
                            Precio
                        </Form.Label>
                        <Input      type = 'number'
                                    onChange={this.handlePriceChange} />
                    </Col>
                    
                </FormGroup>
            </div>
        )
    }

    /****************************************
    *
    *   Functions that will handle form input
    * 
    *****************************************/
    handleNameChange(event) {
     const name = event.target.value;
     this.setState({
        class_name: name
     });
    }

    handleDateChange(event) {
     const date = event.target.value;
     this.setState({
         class_date: date
     });
    }

    handleTimeChange(event) {
     const time = event.target.value;
     this.setState({
         class_time: time
     });
    }

    handleSubjectChange(event) {
     const subject = event.target.value;
     this.setState({
         class_subject: subject
     });
    }

    handleAreaChange(event) {
     const subject = event.target.value;
     this.setState({
         class_area: subject
     });
    }

    handleDescriptionChange(event) {
     const description = event.target.value;
     this.setState({
         class_description: description
     });
    }

    handlePriceChange(event) {
     const price = event.target.value;
     this.setState({
         class_price: price
     });
    }

    formHasMissingFields  ()  {
        return (
                this.state.class_area === '' ||
                this.state.class_date === '' ||
                this.state.class_description === '' ||
                this.state.class_name === '' ||
                this.state.class_price === '' ||
                this.state.class_time === '' ||
                this.state.class_subject === ''
        );
    }

    /****************************************
    *
    *   Functions that will handle display logic
    * 
    *****************************************/
    toggle() {
       this.setState({
            modal : false,
        })
    }

    displayModal () {
        this.setState({
            modal: true
        })
    }

    /****************************************
    *
    *   Functions that will API interactions
    * 
    *****************************************/
    createClass() {
        if(this.formHasMissingFields()) {
            this.setState({
                hasError: true
            });
            setTimeout(function() {
                this.setState({ hasError: false});
            }.bind(this),3500);
        } else {
            
            const date_str = this.state.class_date + ' ' + this.state.class_time;
            const date = new Date(date_str);
            
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'x-auth-token' : token 
                }
            };
            
            let data = {
                'tutor': this.state.id,
                'name': this.state.class_name,
                'date': date,
                'subject': this.state.class_subject,
                'area': this.state.class_area,
                'description': this.state.class_description,
                'cost': this.state.class_price
            };
            axios.post(url + '/tutors/class',  data, config )
                .then( () => {
                    this.props.shouldReload(true);
                })
                .catch( error => {
                    console.log(error);
                })
        }
    }
}

export default CreateClass;