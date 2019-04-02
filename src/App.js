import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingNavBar from './LandingNavBar/LandingNavBar';
import Login from './Login/Login';
import Reset from './Reset/Reset';
import Bookings from './Bookings/Bookings';
import MyClasses_T from './MyClasses_T/MyClasses_T';
import Classes_T from './Classes_T/Classes_T';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Router>
          <div>
            <LandingNavBar/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/reset' component={Reset}/>
            <Route exact path='/tutors/bookings' component={Bookings}/>
            <Route exact path='/tutors/myclasses' component={MyClasses_T}/>
            <Route exact path='/tutors/classes' component={Classes_T}/>
          </div>
        </Router>
      </div>
    );
  }

  componentDidMount() {

  }
}

export default App;
