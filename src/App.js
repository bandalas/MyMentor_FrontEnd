import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import TutorDashboard from './components/TutorDashboard/TutorDashboard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      token: '',
      id: ''
    }
    this.handleAuthenticationChange = this.handleAuthenticationChange.bind(this);
  }

  render() { 
    if(!this.state.authenticated) {
      return(
        <LandingPage handleLogin={this.handleAuthenticationChange} />
      );
    }
    else {
      return(
        <TutorDashboard token={this.state.token} id={this.state.id}/>
      )
    }
    
  }

  handleAuthenticationChange(data) {
    this.setState({
      authenticated: data.authenticated,
      token: data.token,
      id: data.id
    });
  }

}

export default App;
