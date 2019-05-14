import React, { Component } from 'react';
import axios from 'axios';
import './reviews.css';
import ReviewCard from './ReviewCard/ReviewCard';
import url from '../../../Url';


class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            reviews: [],
            display: false,
           userInfo: ''
        }
        this.getAllAvailableTutorReviews = this.getAllAvailableTutorReviews.bind(this);
        this.getuserInfo = this.getuserInfo.bind(this);

    }

    componentDidMount() {
        this.getAllAvailableTutorReviews();
        this.getuserInfo();
    }

    render() {
        return(
              <div id='review-container'>

                <div class="emptymsg">
                { this.state.reviews.length == 0 ? <h4><p>Aun no tienes reviews {this.state.userInfo.firstName}! Da tu primera clase y espera la retroalimentacion...</p></h4> : this.state.reviews.map(reviews => {
                    return (<ReviewCard     key={reviews._id}
                                            student={reviews.student}
                                            class={reviews.class}
                                            comment={reviews.comment}
                                            stars={reviews.stars}
                                            date={reviews.date}
                                            id = {reviews._id}
                            />)
                })}    
            </div> </div>
        );
    }


getAllAvailableTutorReviews() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        const URL = url + '/tutors/reviews';
        axios.get(URL, {headers})
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
export default Reviews;
