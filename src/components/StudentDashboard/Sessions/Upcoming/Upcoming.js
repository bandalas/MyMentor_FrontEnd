import React, { Component } from 'react';
import SessionsCard from '../SessionsCard/SessionsCard';
import axios from 'axios';
import url from '../../../../Url';
class Upcoming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcoming: []
        }
        this.refreshUpcomingClassesData = this.refreshUpcomingClassesData.bind(this);
        this.fetchUpcomingClasses = this.fetchUpcomingClasses.bind(this);
    }

    componentDidMount() {
        this.fetchUpcomingClasses();
    }

    render() {
        return(
            <div id='cancelled-container'>
                {this.state.upcoming.length == 0 ? <h4>Ninguna clase agendada :(</h4>:
                this.state.upcoming.map(booking => {
                    return (<SessionsCard   key={booking._id}
                                            name={booking.name}
                                            subject={booking.subject}
                                            date={booking.date}
                                            status='Upcoming'
                                            id={booking._id}
                                            refresh={this.refreshUpcomingClassesData}
                            />)
                })
                }    
            </div>
        );
    }

    refreshUpcomingClassesData(refresh) {
        if(refresh) {
            this.fetchUpcomingClasses();
        }
    }

    fetchUpcomingClasses() {
        const token = localStorage.getItem('token');
        const config = {
            headers : {
                'Content-Type': 'application/json',
                'x-auth-token' : token 
            }
        }
        const URL = url + '/students/upcoming';
        axios.get(URL, config)
         .then( data => {
             this.setState({
                 upcoming: data.data
             });
         })
         .catch(error => console.log(error));
    }
}
export default Upcoming;