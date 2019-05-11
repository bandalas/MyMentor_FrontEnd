import React, {Component} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import LandingNavBar from './LandingNavBar/LandingNavBar';
import Content from './Content/Content';
import Search from './Search/Search';
import StudentSignup from './Signup/Student/StudentSignup';
import TutorSignup from './Signup/Tutor/TutorSignup';
import TutorProfile from './../Profiles/Tutor/TutorProfile'

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
                            <Route exact path="/"         component={Content} />
                            <Route exact path="/signup"   component={StudentSignup} />
                            <Route exact path="/search"   component={Search} />
                            <Route exact path="/tutors"   component={TutorSignup} />
                            <Route exact path="/user/:id" component={TutorProfile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}

export default LandingPage;