import React, {Component} from 'react';
class BookingCard extends Component {

    render() {
        return(
            <div className="booking-card">
                <p><b>Tutor: </b>{this.props.tutor}</p>
                <p><b>Class: </b>{this.props.booked_class}</p>
                <p><b>Student: </b>{this.props.student}</p>
                <hr></hr>
            </div>
        );
    }

}

export default BookingCard;