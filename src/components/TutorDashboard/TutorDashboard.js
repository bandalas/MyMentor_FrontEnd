import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import NavBarTutor from './Navigation/NavBarTutor';
import TutorDashboardContent from './Content/TutorDashboardContent';
import Notifications from './Notifications/Notifications';
import Bookings from './Classes/Booking/Booking';
import MyClasses from './Classes/MyClasses';

class TutorDashboard extends Component{
    
    constructor(props) {
       super(props);
       console.log(props.token);
       this.state = {
           isAuthenticated : false
       };
    }

    render() {
        if(!this.props.token) {
            return <Redirect to='/login' />
        }

        return(
                <div id='tutor-navigation'> 
                    <BrowserRouter>
                        <div>
                            <NavBarTutor />
                            <Switch>
                            <Route  path="/tutor/dashboard"
                                    render = {
                                        (props) => <TutorDashboardContent {...props} token={this.props.token} />
                                    }
                                    exact/>

                            <Route  path="/tutor/classes"
                                    render = {
                                        (props) => <MyClasses {...props} token={this.props.token}
                                                                            id={this.props.id} />
                                    }
                                    exact/>

                            <Route  path="/tutor/notifications"
                                    render = {
                                        (props) => <Notifications {...props} token={this.props.token} />
                                    }
                                    exact/>
                            <Route  path="/tutor/bookings"
                                    render = {
                                        (props) => <Bookings {...props} token={this.props.token} />
                                    }
                                    exact/>
                            
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
        );
    }
}

export default TutorDashboard;