import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './profiles.css';
import ProfileCard from './ProfileCard/ProfileCard';

class Profiles extends Component {
   constructor(props){
        super(props);
        this.state = {
            token : this.props.token,
            id: this.props.id,
            firstname: this.props.fn,
            lastname: this.props.ln,
            email: this.props.em,
            institution: this.props.instit,
            semester: this.props.sems,
            description: this.props.dsc,
            display: false,
        }
        

    }
    render() {
        return(

              <div id='profile-container'>

            <ProfileCard   
                    firstname={this.props.firstname}
                    lastname={this.state.ln}
                    email= {this.props.em}
                    institution= {this.props.instit}
                    semester= {this.props.sems}
                    description= {this.props.dsc}
                                            
                                            
                            />
            </div>
        );
    }





}



export default Profiles;
