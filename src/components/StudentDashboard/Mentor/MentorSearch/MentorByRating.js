import React, {Component} from 'react';
import axios from 'axios';
import MentorCard from '../MentorCard/MentorCard';

class MentorByRating extends Component {

    constructor(props) {
        super(props);
        this.queryMentors = this.queryMentors.bind(this);
        this.state = {
            topMentors : []
        }
    }

    componentDidMount() {
        this.queryMentors();
    }

    render(){
        console.log(this.state.topMentors);
        return(
            <div className="all-mentors">
                {this.state.topMentors.map(mentor => (
                    <MentorCard key={mentor._id}
                                firstName={mentor.firstName}
                                lastName={mentor.lastName}
                                rating={mentor.rating}
                                description={mentor.description}
                    />
                ))}
                

            </div>
        );
    }

    queryMentors() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
         axios.get('http://localhost:3001/students/mentors', {headers})
            .then(data => {
                const arr = data.data;
                this.setState({
                    topMentors : arr
                })
            })
            .catch(reason =>{
                console.log(reason);
            });
    }
}
export default MentorByRating;