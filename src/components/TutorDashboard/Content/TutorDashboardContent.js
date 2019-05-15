import React, {Component} from 'react';
import axios from 'axios';
import url from '../../../Url';
import { NavLink} from 'react-router-dom';
import ClassInfo from './ClassInfo';
import './tutordashboardcontent.css';

class TutorDashboardContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            upcoming : []
        }
        this.getScheduledClasses = this.getScheduledClasses.bind(this);
    }

    componentDidMount() {
        this.getScheduledClasses();
    }

    render(){
        return(
            <div class ="home1">  <h4 id="jumboh1" className="jumbo">Próximas Clases</h4>
                {this.state.upcoming.length === 0 ? <h3>No tienes ninguna clase próxima agendada ):</h3>
                : this.state.upcoming.map(upcom => {
                    return(<ClassInfo   key={upcom._id} 
                                        name={upcom.name}
                                        date={upcom.date}
                    />)
                })}
            <div class="cancelC">  <NavLink to="/tutor/bookings">¿Deseas cancelar una de tus clases?</NavLink></div></div>
        );
    }

    getScheduledClasses() {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'x-auth-token' : token 
            }
        };
        axios.get(url+'/tutors/scheduled', config)
         .then(data => {
             this.setState({
                 upcoming: data.data
             })
         })
         .catch(e => console.log(e));

    }
}
export default TutorDashboardContent;
