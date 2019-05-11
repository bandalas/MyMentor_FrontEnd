import React, { Component } from 'react';
import axios from 'axios';
import './profile.css';
import ProfileCard from './ProfileCard/ProfileCard';

class Profile extends Component {
     constructor(props){
        super(props);
        this.state = {
            userInfo: []
        }
        this.getuserInfo = this.getuserInfo.bind(this);

    }

    componentDidMount() {
        this.getuserInfo();
    }

    render() {
        return(

              <div id='userInfo-container'>

                {this.state.userInfo.map(userInfo => {
                    return (<ProfileCard       
                                firstName={userInfo.firstName}
                                lastName={userInfo.lastName}
                                email= {userInfo.email}
                                institution= {userInfo.institution}
                                semester= {userInfo.semester}
                                description= {userInfo.description}
                            />)
                })}    
            </div>
        );
    }




    getuserInfo() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        const url ='https://young-fortress-54541.herokuapp.com/tutors/userInfo';
        axios.get(url, {headers})
            .then(response => {
                const userInfo = response.data;
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


