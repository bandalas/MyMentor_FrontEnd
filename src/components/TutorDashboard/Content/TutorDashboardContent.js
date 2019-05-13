import React, {Component} from 'react';
import axios from 'axios';
import url from '../../../Url';
import ClassInfo from './ClassInfo';

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
            <div>
                <h1>Próximas Clases:</h1>
                {this.state.upcoming.length === 0 ? <h3>No tienes ninguna clase próxima agendada ):</h3>
                : this.state.upcoming.map(upcom => {
                    return(<ClassInfo   key={upcom._id} 
                                        name={upcom.name}
                                        date={upcom.date}
                    />)
                })}
            </div>
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