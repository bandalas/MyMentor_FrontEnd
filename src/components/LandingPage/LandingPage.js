import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from './Login/Login';
import LandingNavBar from './LandingNavBar/LandingNavBar';
import Content from './Content/Content';
import Search from './Search/Search';

import StudentDashboard from '../StudentDashboard/StudentDashboard';
import TutorDashboard from '../TutorDashboard/TutorDashboard';
import StudentSignup from './Signup/Student/StudentSignup';
import TutorSignup from './Signup/Tutor/TutorSignup';

class LandingPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <LandingNavBar/>
                        <Switch>
                            <Route  path="/login"
                                    render = {
                                        (props) => <Login {...props} handleLogin={this.props.handleLogin} />
                                    }
                                    exact />
                            <Route path="/"         component={Content} exact />
                            <Route path="/signup"   component={StudentSignup} exact/>
                            <Route path="/search"   component={Search} exact/>
                            <Route path="/tutors"   component={TutorSignup} exact/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}

export default LandingPage;