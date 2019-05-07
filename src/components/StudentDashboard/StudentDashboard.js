import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Navigation/NavBar';
import MentorByRating from './Mentor/MentorSearch/MentorByRating';
import StudentDashboardContent from './Content/StudentDashboardContent';
import ClassByAvailability from './Classes/ClassesSearch/ClassByAvailability';
import { logout } from '../Auth/Auth';

class StudentDashboard extends Component{
    
    constructor(props) {
       super(props);
       // Functions that will handle the view
       this.renderNavigation = this.renderNavigation.bind(this);
    }

    render() {
        return(
            <div>
                <div id='student-navigation'> 
                   {this.renderNavigation()}
                </div>
                
                {/* <ClassCarousel/> */}
            </div>
        );
    }

    renderNavigation() {
        return(
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route path="/student/search/mentor" component={MentorByRating}/>
                        <Route path="/student/dashboard" component={StudentDashboardContent}/>
                        <Route path="/student/search/class" component={ClassByAvailability}/>
                        <Route path="/logout" render={logout}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default StudentDashboard;
