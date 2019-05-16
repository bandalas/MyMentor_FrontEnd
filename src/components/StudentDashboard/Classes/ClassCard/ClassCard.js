import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Jumbotron, Container } from 'reactstrap';
import './ClassCard.css';
import axios from 'axios';
import url from '../../../../Url';
import {Card} from 'react-bootstrap'
import paso1 from '../../../../img/paso1.png'

class ClassesCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          date: '',
          time: '',
        };
        this.toggle = this.toggle.bind(this);
        this.renderConfirmationModal = this.renderConfirmationModal.bind(this);
        this.scheduleDate = this.scheduleDate.bind(this);
        // logic functiosn
        this.convertDateTimeFormat = this.convertDateTimeFormat.bind(this);
    }

    componentDidMount() {
        this.convertDateTimeFormat();
    }

    render(){
        return(
            <div className='class-card-container'>
                <div className="modal-confirmation">
                {this.renderConfirmationModal()}
                </div>
                {/* <div className="class-card">
                    <p>{this.props.name}</p>
                    <p>Materia:{this.props.subject}</p>
                    <p>Área:{this.props.area}</p>
                    <p>{this.props.description}</p>
                    <p>Fecha:{this.state.date}</p>
                    <p>Hora: {this.state.time}</p>
                    <p>Costo: $ {this.props.cost} MXN</p>
                    <Button color="primary" onClick={this.toggle}>Agendar</Button>
                </div> */}

                <Card className = "card_class">
                    <Card.Img variant="top" src={paso1} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            <span className="span-card">Materia: </span>{this.props.subject}<br/>
                            <span className="span-card">Área: </span>{this.props.area}<br/>
                            {this.props.description}<br/>
                            <span className="span-card">Fecha: </span>{this.state.date}<br/>
                            <span className="span-card">Hora: </span>{this.state.time}<br/>
                            <span className="span-card">Costo: </span>$ {this.props.cost} MXN<br/>
                        </Card.Text>
                        <Button color="primary" onClick={this.toggle}>Agendar</Button>
                    </Card.Body>
                </Card>
            </div> 
        );
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle scheduling view
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    // Function that will render the modal that allows for schedule
    renderConfirmationModal(){
        return(
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">{this.props.name}</h1>
                            <h1 className="display-5">{this.state.date} a las</h1>
                            <h1 className="display-5">{this.state.time} hrs</h1>
                            <h1 >$ {this.props.cost} MXN</h1>
                            <p className="lead">Estas a punto de agendar esta clase. <br/>
                            Recuerda que debes de pagar a tu tutor al inicio de la sesión.<br/>
                            <span className="span-card-class">¿Estás seguro que deseas continuar?</span></p>
                        </Container>
                    </Jumbotron>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.scheduleDate}>Confirmar</Button>{' '}
                </ModalFooter>
            </Modal>
        )
    }
    // Function that toggles the modal
    toggle() {
        this.setState({
            modal : !this.state.modal
        });
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle logic 
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    // Function that will turn the date into readable data
    convertDateTimeFormat() {
        const months_es = ['Enero', 'Febrero', 'Marzo', 'Abril',
        'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
        'Octubre', 'Noviembre', 'Diciembre'];
        let date = this.props.date;
        date = new Date(date);
        // Setting the date
        const final_date = date.getUTCDate() + ' ' + months_es[date.getUTCMonth()] + ' '+ date.getUTCFullYear();
        // Setting the time
        let minutes = this.appendZerosToTime(date.getMinutes());
        let hour = this.appendZerosToTime(date.getHours());
        const final_time = hour + ':' + minutes;
        // Setting the states with the gotten values
        this.setState({
            date: final_date,
            time: final_time
        });
    }
    // Function that will receive an hour or minute and change its format
    appendZerosToTime = (time) => {
        time = time.toString();
        if(time.length < 2) {
            time = '0' + time;
        }
        return time;
    }
    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle API interaction 
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    // Schedules the given class
    scheduleDate() {
        const id = this.props.id;
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'x-auth-token' : token 
            }
        }
        const URL = url + '/students/book/'+id;
        console.log(URL);
         axios.post(URL, {},config)
            .then(data => {
                this.setState({
                    modal: false
                });
                alert("Fecha agendada con éxito");
                this.props.refresh(true);
            })
            .catch(reason =>{
                console.log(reason);
            });
    }
}
export default ClassesCard;
