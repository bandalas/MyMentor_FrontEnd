import React, {Component} from 'react';
import axios from 'axios';
import url from '../../../Url';

class TutorDashboardContent extends Component {
    constructor(props){
        super(props);
        this.getScheduledClasses = this.getScheduledClasses.bind(this);
    }

    componentDidMount() {
        this.getScheduledClasses();
    }
    render(){
        return(
            <div>
                TutorDashboardContent!!
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
             console.log(data);
         })
         .catch(e => console.log(e))
    }
}
export default TutorDashboardContent;