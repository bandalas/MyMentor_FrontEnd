import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBarTutor from './Navigation/NavBarTutor';
import TutorDashboardContent from './Content/TutorDashboardContent';
import ClassEditor from './Classes/Editor/ClassEditor';
import Notifications from './Notifications/Notifications';

class TutorDashboard extends Component{
    
    constructor(props) {
       super(props);
       console.log(props.token);
    }

    render() {
        return(
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

                            <Route  path="/tutor/classes"
                                    render = {
                                        (props) => <ClassEditor {...props} token={this.props.token} />
                                    }
                                    exact/>

                            <Route  path="/tutor/notifications"
                                    render = {
                                        (props) => <Notifications {...props} token={this.props.token} />
                                    }
                                    exact/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
        );
    }
}

export default TutorDashboard;