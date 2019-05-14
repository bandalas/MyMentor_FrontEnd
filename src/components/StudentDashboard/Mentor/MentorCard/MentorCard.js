import React, {Component} from 'react';
import './MentorCard.css'
import {Card} from 'react-bootstrap'
import paso1 from '../../../../img/paso1.png'
import StarRatings from 'react-star-ratings';

class MentorCard extends Component {

    render() {
        return(
            <div className='mentor-card-container'>
                <Card className = "card_mentor">
                    <Card.Img variant="top" src={paso1} />
                    <Card.Body>
                        <Card.Title>{this.props.firstName +' '+ this.props.lastName}</Card.Title>
                        <Card.Text>
                            <span className="span-card">Estrellas</span><br/>
                            {/* Condition to display stars */}
                            {this.props.rating ?  
                            <StarRatings
                                // rating = {3}
                                rating = {this.props.rating}
                                starRatedColor='rgb(255,223,0)'
                                starDimension="30px"
                                numberOfStars={5}/>
                                : ' Sin suficientes evaluaciones'}
                            <span className="span-card"><br/>Descripcion</span><br/>{this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
        
    }
}

export default MentorCard;