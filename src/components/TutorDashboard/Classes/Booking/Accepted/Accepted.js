import React, {Component} from 'react';
import axios from 'axios';
import BookingCard from '../BookingCard/BookingCard';
import url from '../../../../../Url';

class Accepted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            raw_accepted : [],
            accepted: []
        };
        this.fetchAcceptedBookings = this.fetchAcceptedBookings.bind(this);
    }

    componentDidMount() {
        this.fetchAcceptedBookings();
    }

    render() {
        return(
            <div id='cancelled-container'>
                {this.state.raw_accepted.length == 0 ? <h4>Ninguna clase aceptada ):</h4> :
                this.state.raw_accepted.map(booking => {
                    return (<BookingCard    key={booking._id}
                                            id={booking._id}
                                            booked_class={booking.class}
                                            student={booking.student}
                                            status={booking.status}
                                            date={booking.date}
                                            refreshBookings={this.fetchPendingBookings}
                            />)
                })
                }    
            </div>
        );
    }

    fetchAcceptedBookings() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        axios.get(url + '/tutors/bookings/accepted', {headers})
            .then(data => {
                const arr = data.data;
                console.log(arr);
                this.setState({
                    raw_accepted : arr
                });
            })
            .catch(error => console.log(error));
    }
}
export default Accepted;