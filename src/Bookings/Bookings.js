import React, {Component}from 'react';
import {Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import './bookings.css';
import { NavLink} from 'react-router-dom';
import NormalForm from './NormalForm.js/NormalForm';
import ErrorForm from './ErrorForm/ErrorForm';
import BookingsCard from './BookingsCard/BookingsCard';

class BookingsSection extends Component {

    constructor(props) {
        super(props);
        //this.queryTopRatedClasses = this.queryTopRatedClasses.bind(this);
        this.queryBookings = this.queryBookings.bind(this);        
        this.state = {
            //newestClasses : []
            newestBookings : []
        }
    }

    componentDidMount() {
        //this.queryTopRatedClasses();
          this.queryBookings();
    }

    render(){
        return(
            <div className='bookings-section'>
                <h1>Bookings más recientes</h1>
                {console.log(this.state.newestBookings)}
                {this.state.newestBookings.map(new_class => (
                    <BookingsCard    
                                    
                                    status={new_class.status}
                                    tutor={new_class.tutor}
                                    booked_class={new_class.booked_class}
                                    student={new_class.student}
                                    description={new_class.description}
                                    date={new_class.date}
                    />
                ))}
            </div>
        );
    }

    queryBookings() {
        const token = this.props.token;
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzczOTRhMGEzN2Y4ZjZiNjhhNzc3MGEiLCJuYW1lIjoiVGVzdCIsInR5cGUiOiJUdXRvciIsImlhdCI6MTU1MTA3ODU3Mn0.zmobVu-myKFygrrm6X7irg2xHK_Awx7w8NhKXN-w9Vc'
        }
         axios.get('http://localhost:3001/tutors/bookings', {headers})
            .then(data => {
                const arr = data.data;
                this.setState({
                    newestBookings : arr
                })
            })
            .catch(reason =>{
                console.log(reason);
            });
    }
    
}
export default BookingsSection;
