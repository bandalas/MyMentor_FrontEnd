import React, { Component } from 'react';
import SessionsCard from '../SessionsCard/SessionsCard';
import Axios from 'axios';
import url from '../../../../Url';
import './past.css'
class Past extends Component {
    constructor(props){
        super(props);
        this.state = {
            past: []
        };
        this.fetchPastSessions = this.fetchPastSessions.bind(this);
    }
    componentDidMount(){
        this.fetchPastSessions();
    }

    render() {
        return(
            <div id='cancelled-container'><div class="acceptedcard">
                {this.state.past.length == 0 ? <h4>Ninguna clase pasada :(</h4>:
                this.state.past.map(booking => {
                    return (<SessionsCard   key={booking._id}
                                            name={booking.name}
                                            subject={booking.subject}
                                            date={booking.date}
                                            status='Past'
                                            id={booking._id}
                                            refresh={this.refreshUpcomingClassesData}
                                            class={booking.class}
                            />)
                })
                }    
            </div></div>
        );
    }

    fetchPastSessions(){
        const URL = url + '/students/past';
        const token = localStorage.getItem('token');
        const config = {
            headers : {
                'Content-Type': 'application/json',
                'x-auth-token' : token 
            }
        }
        Axios.get(URL, config)
         .then(data => {
             this.setState({
                 past: data.data
             });
         })
         .catch(error => console.log(error));
    }
}
export default Past;
