import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingNavBar from './LandingNavBar/LandingNavBar';
import Login from './Login/Login';
import Reset from './Reset/Reset';


class App extends Component {
  render() {
    return (
      <div className='main'>
        <Router>
          <div>
            <LandingNavBar/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/reset' component={Reset}/>
          </div>
        </Router>
      </div>
    );
  }

  componentDidMount() {

  }
}

export default App;
