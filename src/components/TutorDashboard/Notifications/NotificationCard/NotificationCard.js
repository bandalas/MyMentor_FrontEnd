import React, {Component} from 'react';
import '../notifications.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import url from '../../../../Url';

class NotificationCard extends Component {

    constructor(props) {
        super(props);
        this.onAcceptBooking = this.onAcceptBooking.bind(this);
        this.onRejectBooking = this.onRejectBooking.bind(this);
        this.makeAxiosRequest = this.makeAxiosRequest.bind(this);
    }

    render() {
        return(
            <div className="class-notification">
                <p>{this.props.class_name}</p>
                <p>${this.props.class_price}</p>
                <p>Fecha: {this.props.class_schedule}</p>
                <Button color="info" onClick={this.onAcceptBooking}>Aceptar</Button>
                <Button color="danger" onClick={this.onRejectBooking}>Rechazar</Button>

            </div>
        );
    }

    onAcceptBooking() {
        const id = this.props.id;
<<<<<<< HEAD
        const url = 'https://young-fortress-54541.herokuapp.com/tutors/bookings/accept/'+id;
        this.makeAxiosRequest(url);
=======
        const URL = url + '/tutors/bookings/accept/'+id;
        this.makeAxiosRequest(URL);
>>>>>>> fixes
    }

    onRejectBooking() {
        const id = this.props.id;
        const URL = url + '/tutors/bookings/reject/'+id;
        this.makeAxiosRequest(URL);
    }

    makeAxiosRequest(URL) {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }

        axios({
            method: 'put',
            url: URL,
            headers: headers
        })
         .then(data => {
             this.props.onChange();
         })
         .catch(error => {
             console.log(error);
         })
    }
}
export default NotificationCard;
