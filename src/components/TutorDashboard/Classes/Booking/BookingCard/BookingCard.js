import React, {Component} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
class BookingCard extends Component {

    constructor(props) {
        super(props);
        this.renderButtons = this.renderButtons.bind(this);

        this.updateBooking = this.updateBooking.bind(this);
        this.acceptBooking = this.acceptBooking.bind(this);
        this.rejectBooking = this.rejectBooking.bind(this);
        this.cancelBooking = this.cancelBooking.bind(this);
    }

    render() {
        return(
            <div className="booking-card">
                <Row>
                    <Col sm={7}>
                        <p><b>Tutor: </b>{this.props.tutor}</p>
                        <p><b>Class: </b>{this.props.booked_class}</p>
                        <p><b>Student: </b>{this.props.student}</p>
                    </Col>
                    <Col sm={5} className="m-auto px-3">
                        {this.renderButtons()}
                    </Col>
                </Row>
                <hr></hr>
            </div>
        );
    }

    renderButtons() {
        if(this.props.status === 'Accepted') {
            return (
                <div>
                    <Button variant="outline-danger" onClick={this.cancelBooking}>Cancelar</Button>
                </div>
            );
        }
        else if(this.props.status === 'Pending') {
            return (
                <div>
                    <Button variant="outline-success" onClick={this.acceptBooking}>Aceptar</Button>
                    <Button variant="outline-danger" onClick={this.rejectBooking}>Ignorar</Button>
                </div>
            );
        }
    }

    acceptBooking() {
        const accept_msg = "NOTA: Aceptar esta reserva rechazará el resto para esta clase";
        this.updateBooking(accept_msg, 'accept/');
    }

    rejectBooking() {
        const reject_msg = "¿Estas seguro que quieres ignorar esta reserva?";
        this.updateBooking(reject_msg, 'reject/');
    }

    cancelBooking() {
        const cancel_msg = "¿Estas seguro que quieres cancelar tu confirmación?";
        this.updateBooking(cancel_msg, 'cancel/');
    }

    updateBooking(confirmation, endpoint) {
        if(window.confirm(confirmation)) {
            const id = this.props.id;
            const token = localStorage.getItem('token');
            const headers = {
                headers:{
                    'Content-Type': 'application/json',
                    'x-auth-token' : token 
            }}
            const params = {}
            axios.put('http://localhost:3001/tutors/bookings/' + endpoint + id, params, headers)
                .then(data => {
                    const booking = data.data;
                    console.log(booking)
                    this.props.refreshBookings();
                })
                .catch(error => console.log(error));
        }
    }

}

export default BookingCard;