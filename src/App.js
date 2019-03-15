import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';

import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }

  componentDidMount() {
  //  axios.get('http://localhost:3001') 
  //   .then((value)=> {console.log(value)})
  //   .catch((reason)=> {console.log(reason)})
  }
}

export default App;
