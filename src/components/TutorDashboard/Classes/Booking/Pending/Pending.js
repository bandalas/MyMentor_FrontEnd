import React, {Component} from 'react';
import axios from 'axios';
import BookingCard from '../BookingCard/BookingCard';
import url from '../../../../../Url';

class Pending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            raw_pending : [],
            pending: []
        };
        this.fetchPendingBookings = this.fetchPendingBookings.bind(this);
        this.shouldRefresh = this.shouldRefresh.bind(this);
    }

    componentDidMount() {
        this.fetchPendingBookings();
    }

    render() {
        return(
            <div id='cancelled-container'>
                {this.state.raw_pending.length == 0 ? <h4>Ninguna clase pendiente :)</h4>:
                this.state.raw_pending.map(booking => {
                    return (<BookingCard    key={booking._id}
                                            id={booking._id}
                                            booked_class={booking.class}
                                            student={booking.student}
                                            status={booking.status}
                                            date={booking.date}
                                            refresh={this.shouldRefresh}
                            />)
                })
                }    
            </div>
        );
    }

    fetchPendingBookings() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        axios.get(url + '/tutors/bookings/', {headers})
            .then(data => {
                const arr = data.data;
                this.setState({
                    raw_pending : arr
                });
            })
            .catch(error => console.log(error));
    }

    shouldRefresh(refresh) {
        if(refresh) this.fetchPendingBookings();
    }
}

export default Pending;