import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Login/Login';
import LandingNavBar from './LandingNavBar/LandingNavBar';
import Content from './Content/Content';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import TutorDashboard from '../TutorDashboard/TutorDashboard';
import StudentSignup from './Signup/Student/StudentSignup';

class LandingPage extends Component {

    constructor() {
        super();
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.state = {
            isAuthenticated: true,
            userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2FhYTA5YzMwNmMxNzFhNzE3MGRhMDUiLCJuYW1lIjoiR2VyYXJkbyIsInR5cGUiOiJUdXRvciIsImlhdCI6MTU1NDY5MzM1OH0.xlRP2ntTUvwqiNvhuztGZyd3hLe79oexB0S6yWoxeMA',
            userType: 'Tutor'
        }

    }

    render() {
        if(!this.state.isAuthenticated) {
            return(
                <div>
                    <BrowserRouter>
                        <div>
                            <LandingNavBar/>
                            <Switch>
                                <Route 
                                    path="/login" 
                                    render = {
                                        (props) => <Login {...props} onUserLogin={this.handleLoginChange} />
                                    }
                                    exact/>
                                <Route path="/" component={Content} exact />
                                <Route path="/signup" component={StudentSignup} exact/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            );
        }
        else {
            if(this.state.userType === 'Student') {
                return(
                    <div>
                        <BrowserRouter>
                            <div>
                                <Switch>
                                    <Route 
                                            path="/student/dashboard" 
                                            render = {
                                                (props) => <StudentDashboard {...props} token={this.state.userToken} />
                                            }
                                            exact
                                    />
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </div>
                );
            }
            else if(this.state.userType === 'Tutor') {
                console.log('rip');
                return(
                    <div>
                        <BrowserRouter>
                            <div>
                                <Switch>
                                    <Route 
                                            path="/tutor/dashboard" 
                                            render = {
                                                (props) => <TutorDashboard {...props} token={this.state.userToken} />
                                            }
                                            exact
                                    />
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </div>
                );
            }
        }
    }

    handleLoginChange(data) {
        this.setState({
            isAuthenticated: data.authenticated,
            userToken: data.token,
            userType: data.type
        });
    }
}

export default LandingPage;