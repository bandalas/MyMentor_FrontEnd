import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LandingPage from './components/LandingPage/LandingPage';
import TutorDashboard from './components/TutorDashboard/TutorDashboard';
import Login from './components/LandingPage/Login/Login';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import studentAuth from './components/Auth/studentAuth';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      //token: '',
      //token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2FhNzVkMjNjMDA0NzE5YTc4NDdiZGQiLCJuYW1lIjoiQXJpYWRuYSIsInR5cGUiOiJTdHVkZW50IiwiaWF0IjoxNTU2MzgyMjk1fQ.2899RnlF5wxLEfTDyg_hXmXpha4E3hWwkj8wZMgSa24',
      //id: '5caa75d23c004719a7847bdd',
      id: '',
      type: ''
      //type: 'Student',
    }
    this.handleAuth = this.handleAuth.bind(this);
  }

  render() { 
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/login' component={Login} />
          <Route exact path='/student/dashboard' component={ studentAuth(StudentDashboard, this.state.token) }/>
          <Route exact path='/' render={() => <LandingPage handleLogin={this.handleAuthenticationChange}/>} />
        </div>
      </BrowserRouter>
    );

    // if(!this.state.authenticated) {
    //   return(
    //     <LandingPage handleLogin={this.handleAuthenticationChange} />
    //   );
    // }
    // else {
    //   if(this.state.type === 'Student') {
    //     return(
    //       <StudentDashboard  token={this.state.token} />
    //     );
    //   }
    //   else if(this.state.type === 'Tutor') {
    //     return(
    //       <TutorDashboard token={this.state.token} id={this.state.id}/>
    //     );
    //   }
    // }
    
  }

  handleAuth(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('id', data.id);
    localStorage.setItem('type', data.type);

    this.setState({
      token: data.token,
      id: data.id,
      type: data.type
    },() => {
      console.log(this.state.token)
      console.log(this.state.id)
    });
    
  }
}

export default App;
