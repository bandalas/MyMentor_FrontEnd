import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBarTutor from './Navigation/NavBarTutor';
import TutorDashboardContent from './Content/TutorDashboardContent';
import Notifications from './Notifications/Notifications';
import Bookings from './Classes/Booking/Booking';
import MyClasses from './Classes/MyClasses';
import Profile from './Profile/Profile';

import { logout } from '../Auth/Auth';
import Search from '../LandingPage/Search/Search';
import Reviews from './Reviews/Reviews';

class TutorDashboard extends Component{
    render() {
        return(
                <div id='tutor-navigation'> 
                    <BrowserRouter>
                        <div>
                            <NavBarTutor/>
                            <Switch>
                                <Route path="/search" component={Search} exact/>
                                <Route path="/tutor/dashboard" component={TutorDashboardContent}/>
                                <Route path="/tutor/classes" component={MyClasses}/>
                                <Route path="/tutor/notifications" component={Notifications}/>
                                <Route path="/tutor/bookings" component={Bookings}/>
                                <Route path="/tutors/reviews" component={Reviews}/>
                                <Route path="/tutors/profile" component={Profile}/>
                                <Route path="/logout" render={logout}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
        );
    }
}

export default TutorDashboard;
