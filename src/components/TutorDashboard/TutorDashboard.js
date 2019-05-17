import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBarTutor from './Navigation/NavBarTutor';
import TutorDashboardContent from './Content/TutorDashboardContent';
import Notifications from './Notifications/Notifications';
import Bookings from './Classes/Booking/Booking';
import MyClasses from './Classes/MyClasses';
import Profile from './Profile/Profile';
import logo from '../../img/logo.png'
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

  <div className="head_intro_dashboard">
                        <img id="log_dashboard" src={logo} alt="imagen del logotipo"></img>
                        <h4>Aprende con </h4>
                        <h4 id="slogan_1">alguien como tu</h4>
                    </div>

                        </div>
                    </BrowserRouter>
                </div>
        );
    }
}

export default TutorDashboard;
