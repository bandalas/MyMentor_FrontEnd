import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ClassCard.css';
import axios from 'axios';
import url from '../../../../Url';


class ClassesCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.renderConfirmationModal = this.renderConfirmationModal.bind(this);
        this.scheduleDate = this.scheduleDate.bind(this);
    }

    render(){
        return(
            <div className='class-card-container'>
                <div className="modal-confirmation">
                {this.renderConfirmationModal}
                </div>
                <div className="class-card">
                    <p>{this.props.name}</p>
                    <p>Materia:{this.props.subject}</p>
                    <p>Área:{this.props.area}</p>
                    <p>{this.props.description}</p>
                    <p>Fecha:{this.props.date}</p>
                    <Button color="primary" onClick={this.toggle}>Agendar</Button>
                </div>
            </div> 
        );
    }

    renderConfirmationModal(){
        return(
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Agendar cita</ModalHeader>
                <ModalBody>
                    ¿Estás seguro que deseas agendar esta cita? ¿Ya revisaste el precio y el horario?
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={this.scheduleDate}>Confirmar</Button>{' '}
                </ModalFooter>
            </Modal>
        )
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    scheduleDate() {
        const id = this.props.id;
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
         axios.get(url + '/book/new-classes/'+id, {headers})
            .then(data => {
                console.log(data);
                this.setState({
                    modal: false
                });
                alert("Fecha agendada con éxito");
            })
            .catch(reason =>{
                console.log(reason);
            });
    }
}
export default ClassesCard;
