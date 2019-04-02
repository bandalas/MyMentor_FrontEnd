import React, {Component}from 'react';
import {Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import './myclasses_t.css';
import { NavLink} from 'react-router-dom';
import MyClasses_TCard from './MyClasses_TCard/MyClasses_TCard.js';
class MyClasses_tSection extends Component {

    constructor(props) {
        super(props);
        this.queryClasses = this.queryClasses.bind(this);        
        this.state = {
            newestClasses : []
        }
    }

    componentDidMount() {
          this.queryClasses();
    }

    render(){
        return(
            <div className='classes-section'>
                <h1>Mis Clases</h1>
                {console.log(this.state.newestClasses)}
                {this.state.newestClasses.map(new_class => (
                    <MyClasses_TCard    
                                    
                                    name={new_class.name}
                                    area={new_class.area}
                                    subject={new_class.subject}
                                    cost={new_class.cost}
                                    description={new_class.description}
                                    date={new_class.date}
                    />
                ))}
            </div>
        );
    }

    queryClasses() {
        const token = this.props.token;
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzczOTRhMGEzN2Y4ZjZiNjhhNzc3MGEiLCJuYW1lIjoiVGVzdCIsInR5cGUiOiJUdXRvciIsImlhdCI6MTU1MTA3ODU3Mn0.zmobVu-myKFygrrm6X7irg2xHK_Awx7w8NhKXN-w9Vc'
        }
         axios.get('http://localhost:3001/tutors/classes', {headers})
            .then(data => {
                const arr = data.data;
                this.setState({
                    newestClasses : arr
                })
            })
            .catch(reason =>{
                console.log(reason);
            });
    }
    
}
export default MyClasses_tSection;
