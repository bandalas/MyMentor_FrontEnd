import React, {Component} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import LandingNavBar from './LandingNavBar/LandingNavBar';
import Content from './Content/Content';
import Search from './Search/Search';
import StudentSignup from './Signup/Student/StudentSignup';
import TutorSignup from './Signup/Tutor/TutorSignup';
import Reset from './Reset/Reset';
import PasswordReset from './Reset/PasswordReset/PasswordReset';

class LandingPage extends Component {

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
                            <Route path="/reset"    component={Reset} exact/>
                            <Route path="/reset_password/reset"  component={PasswordReset}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}

export default LandingPage;