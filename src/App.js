import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingHeader from './LandingHeader/LandingHeader';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <LandingHeader/>
        
      </div>
    );
  }

  componentDidMount() {

  }
}

export default App;
