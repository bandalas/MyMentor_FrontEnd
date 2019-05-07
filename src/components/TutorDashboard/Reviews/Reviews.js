import React, { Component } from 'react';
import axios from 'axios';
import './reviews.css';
import ReviewCard from './ReviewCard/ReviewCard';

class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            reviews: [],
            display: false,
        }
        this.getAllAvailableTutorReviews = this.getAllAvailableTutorReviews.bind(this);

    }

    componentDidMount() {
        this.getAllAvailableTutorReviews();
    }

    render() {
        return(

              <div id='review-container'>
                {this.state.reviews.map(reviews => {
                    return (<ReviewCard    student={reviews.student}
                                            class={reviews.class}
                                            comment={reviews.comment}
                                            stars={reviews.stars}
                                            date={reviews.date}
                                            id = {reviews._id}
                            />)
                })}    
            </div>
        );
    }


getAllAvailableTutorReviews() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        const url ='http://localhost:3001/tutors/reviews';
        axios.get(url, {headers})
            .then(response => {
                const reviews = response.data;
                this.setState({
                    reviews: reviews
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
}
export default Reviews;
