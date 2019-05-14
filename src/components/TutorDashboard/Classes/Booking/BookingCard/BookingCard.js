import React, {Component} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import url from '../../../../../Url';
class BookingCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: ''
        };
        this.renderButtons = this.renderButtons.bind(this);

        this.updateBooking = this.updateBooking.bind(this);
        this.acceptBooking = this.acceptBooking.bind(this);
        this.rejectBooking = this.rejectBooking.bind(this);
        this.cancelBooking = this.cancelBooking.bind(this);
        // Logic
        this.convertDateTimeFormat = this.convertDateTimeFormat.bind(this);
        this.appendZerosToTime = this.appendZerosToTime.bind(this);
    }

    componentDidMount() {
        this.convertDateTimeFormat();
    }

    render() {
        return(
            <div className="booking-card">
                <Row>
                    <Col sm={7}>
                        <p><b>Clase: </b>{this.props.booked_class}</p>
                        <p><b>Reservada por: </b>{this.props.student}</p>
                        <p><b>Fecha y hora: </b>{this.state.date} @ {this.state.time}</p>
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
        this.props.refresh(true);
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
            axios.put(url + '/tutors/bookings/' + endpoint + id, params, headers)
                .then(data => {
                    const booking = data.data;
                    console.log(booking)
                    this.props.refreshBookings();
                })
                .catch(error => console.log(error));
        }
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

}

export default BookingCard;
