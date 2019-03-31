import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Login/Login';
import LandingNavBar from './LandingNavBar/LandingNavBar';
import Content from './Content/Content';
import StudentDashboard from '../StudentDashboard/StudentDashboard';

class LandingPage extends Component {

    constructor() {
        super();
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.state = {
            isAuthenticated: false,
            userToken: ''
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
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            );
        }
        else {
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
    }

    handleLoginChange(data) {
        this.setState({
            isAuthenticated: data.authenticated,
            userToken: data.token
        });
    }
}

export default LandingPage;