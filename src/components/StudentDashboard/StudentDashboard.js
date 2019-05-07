import React, { Component } from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './Navigation/NavBar';
import MentorByRating from './Mentor/MentorSearch/MentorByRating';
import StudentDashboardContent from './Content/StudentDashboardContent';
import ClassByAvailability from './Classes/ClassesSearch/ClassByAvailability';

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
                   { this.renderNavigation()}
                </div>
                
                {/* <ClassCarousel token={this.props.token} /> */}
            </div>
        );
    }

    renderNavigation() {
        return(
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route  path="/student/search/mentor"
                                render = {
                                    (props) => <MentorByRating {...props} token={this.props.token} />
                                }
                                exact/>
                        <Route  path="/student/dashboard"
                                render = {
                                    (props) => <StudentDashboardContent {...props} token={this.props.token} />
                                }
                                exact/>
                        <Route  path="/student/search/class"
                                render = {
                                    (props) => <ClassByAvailability {...props} token={this.props.token} />
                                }
                                exact />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default StudentDashboard;
