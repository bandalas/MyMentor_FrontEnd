import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import NavBarTutor from './Navigation/NavBarTutor';
import TutorDashboardContent from './Content/TutorDashboardContent';
import Notifications from './Notifications/Notifications';
import Bookings from './Classes/Booking/Booking';
import MyClasses from './Classes/MyClasses';
import Profile from './Profile/Profiles';

import Search from '../LandingPage/Search/Search';
import Reviews from './Reviews/Reviews';

class TutorDashboard extends Component{
    
    constructor(props) {
       super(props);
       console.log(props.token);
    }

    render() {
        if(!this.props.token) {
            return <Redirect to='/login' />
        }

        return(
                <div id='tutor-navigation'> 
                    <BrowserRouter>
                        <div>
                            <NavBarTutor/>
                            <Switch>
                                <Route  path="/search" component={Search} exact/>
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
                            
                               <Route  path="/tutors/reviews"
                                    render = {
                                        (props) => <Reviews {...props} token={this.props.token} />
                                    }
                                    exact/>
                               <Route  path="/tutors/profile"
                                    render = {
                                        (props) => <Profile {...props}  token={this.props.token}                
                                                                        fn={this.props.firstName} 
                                                                        ln={this.props.lastName}
                                                                        em={this.props.email} 
                                                                        instit={this.props.institution} 
                                                                        sems={this.props.semester} 
                                                                        dsc={this.props.description} />
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
