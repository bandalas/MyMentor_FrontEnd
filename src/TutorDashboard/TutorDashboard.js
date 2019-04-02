import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBarTutor from './Navigation/NavBar';


// import MentorByRating from './Mentor/MentorSearch/MentorByRating';
// import StudentDashboardContent from './Content/StudentDashboardContent';
// import ClassByAvailability from './Classes/ClassesSearch/ClassByAvailability';

class TutorDashboard extends Component{
    
    constructor(props) {
       super(props);
       console.log(props.token);
    }

    render() {
        return(
            <div>
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
                            <Route  path="/tutor/search/class"
                                        render = {
                                            // (props) => <ClassByAvailability {...props} token={this.props.token} />
                                        }
                                        exact />
                                {/* <Route  path="/tutor/search/my-class"
                                        render = {
                                            // (props) => <MentorByRating {...props} token={this.props.token} />
                                        }
                                        exact/> */}

                                <Route  path="/tutor/search/my-session"
                                        render = {
                                            // (props) => <ClassByAvailability {...props} token={this.props.token} />
                                        }
                                        exact />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default TutorDashboard;