import React, { Component } from 'react';
import axios from 'axios';
import './profile.css';
import ProfileCard from './ProfileCard/ProfileCard';
import url from '../../../Url';

class Profile extends Component {
     constructor(props){
        super(props);
        this.state = {
            userInfo: ''
        }
        this.getuserInfo = this.getuserInfo.bind(this);

    }

    componentDidMount() {
        this.getuserInfo();
    }

    render() {
        return(
              <div id='userInfo-container'>
                <ProfileCard    firstName={this.state.userInfo.firstName}
                                lastName={this.state.userInfo.lastName}
                                email= {this.state.userInfo.email}
                                institution= {this.state.userInfo.institution}
                                semester= {this.state.userInfo.semester}
                                description= {this.state.userInfo.description}
                />
            </div>
        );
    }

    getuserInfo() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        
        const URL = url + '/tutors/userInfo';
        axios.get(URL, {headers})
            .then(response => {
                const userInfo = response.data[0];
                this.setState({
                    userInfo: userInfo
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
}
export default Profile;


