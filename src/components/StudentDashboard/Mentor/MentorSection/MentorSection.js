import React, { Component } from 'react';
import axios from 'axios';
import MentorCard from '../MentorCard/MentorCard';
import '../mentorstyle.css';

class MentorSection extends Component {

    constructor(props) {
        super(props);
        this.queryTopMentors = this.queryTopMentors.bind(this);
        this.state = {
            topMentors : []
        }
    }

    componentDidMount() {
        this.queryTopMentors()
    }

    render() {
        console.log(this.state.topMentors)
        return(
            <div className='top-mentors-section'>
                <h1 id="jumboh1" className="jumbotron">Mentores mejor calificados</h1>
                {this.state.topMentors.map(mentor => (
                    <MentorCard key={mentor._id}
                                firstName={mentor.firstName}
                                lastName={mentor.lastName}
                                rating={mentor.rating}
                                description={mentor.description}
                    />
                ))}
            </div>
        )
    }

    // Function that will fetch Top Rated Mentors
    queryTopMentors() {
        const token = this.props.token;
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

export default MentorSection;