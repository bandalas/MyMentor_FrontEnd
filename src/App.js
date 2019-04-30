import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LandingPage from './components/LandingPage/LandingPage';
import TutorDashboard from './components/TutorDashboard/TutorDashboard';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      token: '',
      id: '',
      type: ''
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
      console.log(this.state.type)
      if(this.state.type === 'Student') {
        return(
          <StudentDashboard  token={this.state.token} />
        );
      }
      else if(this.state.type === 'Tutor') {
        return(
          <TutorDashboard token={this.state.token} id={this.state.id} fn={this.state.firstname} ln={this.state.lastname} em={this.state.email} instit={this.state.institution} sems={this.state.semester} dsc={this.state.description}/>
        );
      }
      else if(this.state.type === 'Admin') {
        return (
          <AdminDashboard token={this.state.token}/>
        );
      }
    }
    
  }

  handleAuthenticationChange(data) {
    this.setState({
      authenticated: data.isAuthenticated,
      token: data.token,
      id: data.id,
      type: data.type
    });
  }
}

export default App;
