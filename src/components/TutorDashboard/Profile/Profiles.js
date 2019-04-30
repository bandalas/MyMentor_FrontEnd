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
            userinfo: [],
            display: false,
        }
        this.getuserInfo = this.getuserInfo.bind(this);

    }

    componentDidMount() {
        this.getuserInfo();
    }

    render() {
        return(

              <div id='userinfo-container'>

                {this.state.userinfo.map(userinfo => {
                    return (<ProfileCard       firstname={userinfo.firstname}
                    lastname={userinfo.ln}
                    email= {userinfo.em}
                    institution= {userinfo.instit}
                    semester= {userinfo.sems}
                    description= {userinfo.dsc}            
                            />)
                })}    
            </div>
        );
    }




getuserInfo() {
       const token = this.props.token;
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        const url ='http://localhost:3001/tutors/';
        axios.get(url, {headers})
            .then(response => {
                const userinfo = response.data;
                this.setState({
                    userinfo: userinfo
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
}
export default Profiles;


