import React, {Component} from 'react';
import axios from 'axios';
import BookingCard from '../BookingCard/BookingCard';
import url from '../../../../../Url';
import './cancelled.css'

class Cancelled extends Component {
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
            <div id='cancelled-container'> <div class="cancelledcard">
                {this.state.raw_cancelled.length == 0 ? <h4>Ninguna clase cancelada (:</h4> :
                this.state.raw_cancelled.map(booking => {
                    return (<BookingCard    key={booking._id}
                                            tutor={booking.tutor}
                                            booked_class={booking.class}
                                            student={booking.student}
                                            date={booking.date}
                                            
                            />)
                })
                }    
            </div> </div>
        );
    }

    fetchCancelledBookings() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        axios.get(url + '/tutors/bookings/cancelled', {headers})
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
export default Cancelled;
