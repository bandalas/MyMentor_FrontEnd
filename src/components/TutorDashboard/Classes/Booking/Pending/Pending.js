import React, {Component} from 'react';
import axios from 'axios';
import BookingCard from '../BookingCard/BookingCard';

class Pending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            raw_cancelled : [],
            cancelled: []
        };
        this.fetchCancelledBookings = this.fetchCancelledBookings.bind(this);
    }

    componentDidMount() {
        this.fetchCancelledBookings();
    }

    render() {
        
        return(
            <div id='cancelled-container'>
                {this.state.raw_cancelled.map(booking => {
                    return (<BookingCard    key={booking._id}
                                            token={this.props.token}
                                            id={booking._id}
                                            tutor={booking.tutor}
                                            booked_class={booking.booked_class}
                                            student={booking.student}
                                            status={booking.status}
                                            refreshBookings={this.fetchCancelledBookings}
                            />)
                })}    
            </div>
        );
    }

    fetchCancelledBookings() {
        const token = this.props.token;
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        axios.get('http://localhost:3001/tutors/bookings/', {headers})
            .then(data => {
                const arr = data.data;
                console.log(arr);
                this.setState({
                    raw_cancelled : arr
                });
            })
            .catch(error => console.log(error));

    }
}

export default Pending;