import React, {Component} from 'react';
class BookingsCard extends Component {
    render(){
        return(
            <div className="bookings-card">
                <p>Status:{this.props.status}</p>
                <p>Tutor:{this.props.tutor}</p>
                <p>Student:{this.props.student}</p>
                <p>Clase:{this.props.booked_class}</p>
                <p>Fecha:{this.props.date}</p>

            </div>
        );
    }
}
export default BookingsCard;
